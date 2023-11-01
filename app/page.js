import { performRequest } from 'lib/datocms'

import Hero from './_components/hero'

const TEST_QUERY = `
  query testHome {
    testHome {
      testHome
    }
  }
`

export default async function Home() {
  const {
    data: { testHome },
  } = await performRequest({ query: TEST_QUERY })

  console.log(testHome)
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Hero />
    </main>
  )
}
