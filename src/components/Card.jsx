import React from 'react'
import deepEarth from 'assets/images/desktop/image-deep-earth.jpg'

const Card = () => {
  return (
    <div className='relative w-full'>
      <img className='w-full' src={deepEarth} alt="earth" />
      <a className="absolute w-full h-full leading-10 py-8 px-10 bottom-0 flex items-end text-white hover:text-black text-4xl bg-gradient-to-t from-slate-800 hover:from-transparent to-transparent hover:bg-gradient- hover:bg-slate-300/[.7] uppercase font-josefin-sans" href='#'>
        <span className='max-w-[80%]'>Deep Earth</span>
      </a>
    </div>
  )
}

export default Card