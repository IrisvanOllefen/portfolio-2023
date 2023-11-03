import './globals.css'
import { Montserrat } from 'next/font/google'

import TopBlob from './_components/top-blob'
import Header from './_components/header'
import Footer from './_components/footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio of Iris van Ollefen',
  description: 'Portfolio of Iris van Ollefen',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <TopBlob />
        <div className='relative z-20'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
