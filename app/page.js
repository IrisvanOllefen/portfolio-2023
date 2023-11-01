import { performRequest } from 'lib/datocms'

import Hero from './_components/hero'
import AboutMe from './_components/about-me'
import MyWork from './_components/my-work'

const DATOCMS_QUERY = `
  query heroPage {
    heroPage {
      images {
        image {
          responsiveImage {
            alt
            src
            width
            height
          }
        }
      }
      title
      undertitle
    }
    aboutPage {
      title
      textBlocks {
        textBlock
      }
    }
    allMyWorkPages {
      productName
      companyOrClient
      typeOfProduct
      image {
        image {
          responsiveImage {
            src
            alt
            width
            height
          }
        }
      }
    }
  }
`

export default async function Home() {
  const {
    data: { heroPage, aboutPage, allMyWorkPages },
  } = await performRequest({ query: DATOCMS_QUERY })

  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-24 px-8 md:p-24'>
      <Hero heroData={heroPage} />
      <AboutMe aboutData={aboutPage} />
      <MyWork workCardData={allMyWorkPages} />
    </main>
  )
}
