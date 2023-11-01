import Image from 'next/image'
import Link from 'next/link'

export default function MyWork(workCardData) {
  return (
    <div className='mt-24'>
      <h3 className='text-2xl font-medium pb-2 flex justify-center'>
        Mijn werk
      </h3>
      <div className='mt-8 grid grid-cols-2 gap-4'>
        {workCardData.workCardData.map((workCard, index) => {
          return (
            <ul key={index}>
              <div className='absolute opacity-0 hover:opacity-100 transition duration-500 ease-in-out flex flex-col gap-1 items-center bg-opacity-75 bg-black w-[500px] h-[333px] justify-center text-white shadow-2xl'>
                <li className='text-lg font-semibold'>
                  {workCard.productName}
                </li>
                <li className='font-light italic'>{workCard.typeOfProduct}</li>
                <li className='font-semibold pb-2'>
                  {workCard.companyOrClient}
                </li>
                <li>
                  <Link
                    href={`/${workCard.productName}`}
                    className='text-lg font-semibold hover:text-sky-400 active:text-sky-600'>
                    Lees over dit product
                  </Link>
                </li>
              </div>
              <li>
                {workCard.image.map((image) => {
                  return (
                    <Image
                      key='hi'
                      src={image.image.responsiveImage.src}
                      alt={image.image.responsiveImage.alt}
                      width={image.image.responsiveImage.width}
                      height={image.image.responsiveImage.height}
                      className='w-[500px] h-[333px]'
                    />
                  )
                })}
              </li>
            </ul>
          )
        })}
      </div>
    </div>
  )
}
