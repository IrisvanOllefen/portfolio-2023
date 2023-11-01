import { performRequest } from 'lib/datocms'

import Hero from './_components/hero'
import AboutMe from './_components/about-me'

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
  }
`

export default async function Home() {
  const {
    data: { heroPage, aboutPage },
  } = await performRequest({ query: DATOCMS_QUERY })

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Hero heroData={heroPage} />
      <AboutMe aboutData={aboutPage} />
    </main>
  )
}
