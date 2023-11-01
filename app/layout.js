import './globals.css'
import { Montserrat } from 'next/font/google'

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
