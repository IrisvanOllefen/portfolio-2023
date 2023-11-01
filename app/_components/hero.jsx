import Image from 'next/image'

export default function Hero(heroData) {
  return (
    <div className='-mt-24 sm:-mt-12 md:mt-0'>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-2'>
        {heroData.heroData.images.map((image) => {
          return (
            <Image
              key={image.image.responsiveImage.alt}
              src={image.image.responsiveImage.src}
              alt={image.image.responsiveImage.alt}
              width={image.image.responsiveImage.width}
              height={image.image.responsiveImage.height}
              className='w-36 h-36 lg:w-52 lg:h-52 rounded-full object-cover'
            />
          )
        })}
      </div>
      <div className='mt-10 flex flex-col text-center items-center'>
        <h1 className='text-3xl md:text-4xl font-medium px-8'>
          {heroData.heroData.title}
        </h1>
        <h2 className='md:text-xl font-light'>
          {heroData.heroData.undertitle}
        </h2>
      </div>
    </div>
  )
}
