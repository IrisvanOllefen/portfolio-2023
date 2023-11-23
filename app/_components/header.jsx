'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex justify-between px-2 py-4 relative z-50'>
      <Link href='/'>
        <Image
          src='/black-logo.svg'
          alt='Iris Tamara van Ollefen logo'
          width='55'
          height='83'
        />
      </Link>
      <ul className='flex gap-8 px-4 pt-2'>
        <li>
          <a
            href='/'
            onClick={() => {
              window.open('/irisvanollefen-cv-2023.pdf')
            }}
            className='bg-white text-custom-blue font-semibold p-2 rounded-md shadow-md hover:text-custom-blue-hover active:bg-custom-blue-hover active:text-white'>
            Bekijk CV
          </a>
        </li>
        <li>
          <Link href='https://twitter.com/irisvanollefen' target='_blank'>
            <Image
              src='/twitter-white.svg'
              alt='Twitter icon'
              width='25'
              height='25'
            />
          </Link>
        </li>
        <li>
          <Link href='https://github.com/IrisvanOllefen' target='_blank'>
            <Image
              src='/github-white.svg'
              alt='Github icon'
              width='25'
              height='25'
            />
          </Link>
        </li>
        <li>
          <Link
            href='https://www.linkedin.com/in/iris-van-ollefen-38346417b/'
            target='_blank'>
            <Image
              src='/linkedin-white.svg'
              alt='linkedin icon'
              width='25'
              height='25'
            />
          </Link>
        </li>
      </ul>
    </div>
  )
}
