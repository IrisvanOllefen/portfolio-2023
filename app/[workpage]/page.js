import { performRequest } from 'lib/datocms'
import Link from 'next/link'

import ImageComponent from './image-component'

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
            paragraph(markdown: true)
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

export const dynamicParams = false

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const {
    data: { allMyWorkPages },
  } = await performRequest({
    query: `
  query allWorkPages {
    allMyWorkPages {
      urlName
    }
  }
  `,
  })
  return allMyWorkPages.map((item) => {
    return {
      workpage: item.urlName,
    }
  })
}

export default async function WorkPage({ params }) {
  const {
    data: { myWorkPage },
  } = await performRequest({ query: getDatoCmsQuery(params.workpage) })

  return (
    <main className='flex min-h-screen flex-col py-8 px-8'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-3xl md:text-5xl font-medium'>
          {myWorkPage.productName}
        </h1>
      </div>
      <div className='max-w-2xl mx-auto mb-8'>
        <ul className='flex flex-col mb-4 mt-52 gap-4'>
          <li className='flex flex-col justify-between'>
            <span className='font-medium'>Type product</span>
            <span>{myWorkPage.typeOfProduct}</span>
          </li>
          <li className='flex flex-col'>
            <span className='font-medium'>In opdracht van</span>
            <span>{myWorkPage.companyOrClient}</span>
          </li>
          <li className='flex flex-col'>
            <span className='font-medium'>Gebruikte technologieën</span>
            <span>{myWorkPage.usedTechnologies}</span>
          </li>
        </ul>
        {myWorkPage.paragraphBlock.map((singleParagraph) => {
          return (
            <section key={singleParagraph.title} className='my-8'>
              <h2 className='md:text-xl font-medium'>
                {singleParagraph.title}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: singleParagraph.paragraph }}
                className='custom-paragraphs'
              />
            </section>
          )
        })}
        <div className='flex flex-col justify-between gap-1'>
          {myWorkPage.linkToProduct.map((linkItem) => {
            return (
              <Link
                key={linkItem.linkName}
                href={linkItem.link}
                target='_blank'
                className='font-medium underline underline-offset-4'>
                {linkItem.linkName}
              </Link>
            )
          })}
        </div>
      </div>
      <div className='overflow-scroll'>
        <section className='flex gap-4 max-h-[450px] w-max my-4 mb-20'>
          {myWorkPage.imageGallery.map((singleImage) => {
            return (
              <ImageComponent
                singleImage={singleImage}
                key={singleImage.responsiveImage.src}
              />
            )
          })}
        </section>
      </div>
    </main>
  )
}
