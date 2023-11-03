import { performRequest } from 'lib/datocms'

import Image from 'next/image'
import Link from 'next/link'

const getDatoCmsQuery = (workpage) => `
query workPage {
    myWorkPage(filter: {urlName: {eq: "${workpage}"}}) {
        urlName
        productName
        typeOfProduct
        companyOrClient
        usedTechnologies
        linkToProduct {
            linkName
            link
        }
        paragraphBlock {
            title
            paragraph(markdown: false)
          }
        imageGallery {
            responsiveImage {
                src
                alt
                width
                height
            }
        }
    }
}
`

export default async function WorkPage({ params }) {
  const {
    data: { myWorkPage },
  } = await performRequest({ query: getDatoCmsQuery(params.workpage) })

  return (
    <main className='flex min-h-screen flex-col py-8 px-8'>
      <h1 className='text-3xl md:text-4xl font-medium'>
        {myWorkPage.productName}
      </h1>
      <ul className='flex justify-between my-8'>
        <li>{myWorkPage.typeOfProduct}</li>
        <li>{myWorkPage.companyOrClient}</li>
        <li>{myWorkPage.usedTechnologies}</li>
        <li>
          {myWorkPage.linkToProduct.map((linkItem) => {
            return (
              <Link
                key={linkItem.linkName}
                href={`${linkItem.link}`}
                target='_blank'>
                {linkItem.linkName}
              </Link>
            )
          })}
        </li>
      </ul>
      {myWorkPage.paragraphBlock.map((singleParagraph) => {
        return (
          <section key={singleParagraph.title} className='my-4'>
            <h2 className='md:text-xl font-medium'>{singleParagraph.title}</h2>
            <p>{singleParagraph.paragraph}</p>
          </section>
        )
      })}
      <section className='flex gap-4 h-[300px] overflow-scroll my-4'>
        {myWorkPage.imageGallery.map((singleImage) => {
          return (
            <Image
              key={singleImage.responsiveImage.src}
              src={singleImage.responsiveImage.src}
              alt={singleImage.responsiveImage.alt}
              width={singleImage.responsiveImage.width}
              height={singleImage.responsiveImage.height}
              className='max-h-[300px] w-auto '
            />
          )
        })}
      </section>
    </main>
  )
}
