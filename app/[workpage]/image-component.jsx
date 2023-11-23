'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

import Image from 'next/image'

export default function ImageComponent({ singleImage }) {
  let [isOpen, setIsOpen] = useState(false)

  if (singleImage) {
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          key={singleImage.responsiveImage.src}>
          <Image
            src={singleImage.responsiveImage.src}
            alt={singleImage.responsiveImage.alt}
            width={singleImage.responsiveImage.width}
            height={singleImage.responsiveImage.height}
            className='h-[400px] w-fit shadow-xl'
          />
        </button>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className='relative z-50'>
          <div className='fixed inset-0 bg-white/60' aria-hidden='true' />
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex items-center justify-center min-h-full'>
              <Dialog.Panel className='mx-auto'>
                <Image
                  src={singleImage.responsiveImage.src}
                  alt={singleImage.responsiveImage.alt}
                  width={singleImage.responsiveImage.width}
                  height={singleImage.responsiveImage.height}
                  className='h-[600px] w-fit shadow-xl'
                />
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </>
    )
  }
}
