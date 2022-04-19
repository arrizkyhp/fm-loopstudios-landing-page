import React from 'react'
import Image from './Image'

const Card = ({ title, image}) => {
  console.log(image)
  return (
    <div className='relative w-full'>
      <Image 
        src={image.webp.url}
        type={image.webp.type}
        fallback={image.jpg.url}
        alt={image.jpg.alt}
      />
      <a className="absolute w-full h-full leading-10 py-8 px-10 bottom-0 flex items-end text-white hover:text-black text-4xl bg-gradient-to-t from-slate-800 hover:from-transparent to-transparent hover:bg-gradient- hover:bg-slate-300/[.7] uppercase font-josefin-sans" href='#card'>
        <span className='max-w-[200px]'>{title}</span>
      </a>
    </div>
  )
}

export default Card