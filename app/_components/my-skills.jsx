export default function MySkills(skillsPageData) {
  return (
    <div className='mt-16 mb-44'>
      <h3 className='text-2xl font-medium pb-2 flex justify-center'>
        Mijn skills
      </h3>
      <div className='gap-20 mt-6 grid sm:grid-cols-2 lg:grid-cols-4'>
        {skillsPageData.skillsPageData.skillBlock.map((skillBlock) => {
          return (
            <section key={skillBlock.skillBlockTitle}>
              <h4 className='text-xl font-medium pb-2 max-w-[300px]'>
                {skillBlock.skillBlockTitle}
              </h4>
              <ul>
                {skillBlock.singleSkill.map((singleSkill) => {
                  return <li key={singleSkill.title}>{singleSkill.title}</li>
                })}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
