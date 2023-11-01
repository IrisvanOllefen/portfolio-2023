export default function AboutMe(aboutData) {
  return (
    <div className='lg:w-2/3 mt-24'>
      <h3 className='text-2xl font-medium pb-2 flex justify-center'>
        {aboutData.aboutData.title}
      </h3>
      <div className='flex flex-col gap-4'>
        {aboutData.aboutData.textBlocks.map((textBlock, index) => {
          return <p key={index}>{textBlock.textBlock}</p>
        })}
      </div>
    </div>
  )
}
