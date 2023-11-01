import Image from 'next/image'

export default function Hero(heroData) {
  return (
    <div>
      <div className='flex justify-center gap-2'>
        {heroData.heroData.images.map((image) => {
          return (
            <Image
              key={image.image.responsiveImage.alt}
              src={image.image.responsiveImage.src}
              alt={image.image.responsiveImage.alt}
              width={image.image.responsiveImage.width}
              height={image.image.responsiveImage.height}
              className='w-52 h-52 rounded-full object-cover'
            />
          )
        })}
      </div>
      <div className='mt-10 flex flex-col items-center'>
        <h1 className='text-4xl font-medium'>{heroData.heroData.title}</h1>
        <h2 className='text-xl font-light'>{heroData.heroData.undertitle}</h2>
      </div>
    </div>
  )
}
