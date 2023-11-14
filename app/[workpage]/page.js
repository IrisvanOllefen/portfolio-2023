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
      <h1 className='text-3xl md:text-5xl font-medium '>
        {myWorkPage.productName}
      </h1>
      <ul className='flex justify-between my-8 mx-20'>
        <li className='flex flex-col items-center justify-between'>
          <span className='font-medium'>Type product</span>
          <span>{myWorkPage.typeOfProduct}</span>
        </li>
        <li className='flex flex-col items-center'>
          <span className='font-medium'>In opdracht van</span>
          <span>{myWorkPage.companyOrClient}</span>
        </li>
        <li className='flex flex-col items-center'>
          <span className='font-medium'>Gebruikte technologieën</span>
          <span>{myWorkPage.usedTechnologies}</span>
        </li>
        <li className='flex flex-col items-center justify-between gap-1'>
          {myWorkPage.linkToProduct.map((linkItem) => {
            return (
              <Link
                key={linkItem.linkName}
                href={`${linkItem.link}`}
                target='_blank'
                className='font-medium underline underline-offset-4'>
                {linkItem.linkName}
              </Link>
            )
          })}
        </li>
      </ul>
      <div className='mt-16'>
        {myWorkPage.paragraphBlock.map((singleParagraph) => {
          return (
            <section key={singleParagraph.title} className='my-8'>
              <h2 className='md:text-xl font-medium'>
                {singleParagraph.title}
              </h2>
              <p>{singleParagraph.paragraph}</p>
            </section>
          )
        })}
      </div>
      <section className='flex gap-4 h-[450px] overflow-scroll my-4 mb-20'>
        {myWorkPage.imageGallery.map((singleImage) => {
          return (
            <Image
              key={singleImage.responsiveImage.src}
              src={singleImage.responsiveImage.src}
              alt={singleImage.responsiveImage.alt}
              width={singleImage.responsiveImage.width}
              height={singleImage.responsiveImage.height}
              className='h-[400px] w-auto shadow-xl'
            />
          )
        })}
      </section>
    </main>
  )
}
