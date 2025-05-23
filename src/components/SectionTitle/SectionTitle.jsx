import React from 'react'

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className='mx-auto text-center md:w-4/12 my-8'>
      <p className='text-yellow-500 mb-4'>--- {subHeading} ---</p>
      <h3 className='text-3xl border-y-4 py-4 uppercase'>{heading}</h3>
    </div>
  )
}

export default SectionTitle
