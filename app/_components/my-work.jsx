import Image from 'next/image'
import Link from 'next/link'

export default function MyWork(workCardData) {
  return (
    <div className='mt-24'>
      <h3 className='text-2xl font-medium pb-2 flex justify-center'>
        Mijn werk
      </h3>
      <div>
        {workCardData.workCardData.map((workCard, index) => {
          return (
            <ul key={index}>
              <li>{workCard.productName}</li>
              <li>{workCard.companyOrClient}</li>
              <li>{workCard.typeOfProduct}</li>
              <li>
                <Link href={`/${workCard.productName}`}>
                  Lees over dit product
                </Link>
              </li>
              <li>
                {workCard.image.map((image) => {
                  return (
                    <Image
                      key='hi'
                      src={image.image.responsiveImage.src}
                      alt={image.image.responsiveImage.alt}
                      width={image.image.responsiveImage.width}
                      height={image.image.responsiveImage.height}
                      className='w-1/2'
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
