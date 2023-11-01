import { performRequest } from 'lib/datocms'

import Hero from './_components/hero'

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
  }
`

export default async function Home() {
  const {
    data: { heroPage },
  } = await performRequest({ query: DATOCMS_QUERY })

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Hero heroData={heroPage} />
    </main>
  )
}
