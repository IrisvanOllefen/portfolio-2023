import Image from 'next/image'
import Link from 'next/link'

export default function MyWork(workCardData) {
  return (
    <div className='mt-24'>
      <h3 className='text-2xl font-medium pb-2 flex justify-center'>
        Mijn werk
      </h3>
      <div className='mt-4 md:mt-8 md:grid md:grid-cols-2 md:gap-4'>
        {workCardData.workCardData.map((workCard, index) => {
          return (
            <ul key={index} className='pb-6 text-center'>
              <div className='lg:w-[426px] lg:h-[283px] xl:w-[500px] xl:h-[333px] lg:absolute lg:flex lg:flex-col lg:gap-1 lg:items-center lg:bg-black lg:bg-opacity-75 lg:justify-center lg:text-white lg:shadow-2xl lg:opacity-0 lg:hover:opacity-100 lg:transition lg:duration-500 lg:ease-in-out'>
                <li className='md:text-lg font-semibold'>
                  {workCard.productName}
                </li>
                <li className='text-sm md:text-md font-light italic'>
                  {workCard.typeOfProduct}
                </li>
                <li className='font-semibold pb-2'>
                  {workCard.companyOrClient}
                </li>
                <li className='pb-2'>
                  <Link
                    href={`/${workCard.urlName}`}
                    className='md:text-lg font-semibold hover:text-sky-400 active:text-sky-600'>
                    Lees over dit product
                  </Link>
                </li>
              </div>
              <li>
                {workCard.image.map((image) => {
                  return (
                    <Image
                      key={image.image.responsiveImage.src}
                      src={image.image.responsiveImage.src}
                      alt={image.image.responsiveImage.alt}
                      width={image.image.responsiveImage.width}
                      height={image.image.responsiveImage.height}
                      className='md:w-[281px] md:h-[187px] lg:w-[426px] lg:h-[283px] xl:w-[500px] xl:h-[333px]'
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
