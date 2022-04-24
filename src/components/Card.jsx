import React from 'react'
import Image from './Image'
import PropTypes from 'prop-types'
import { useMediaQuery } from 'react-responsive'

const Card = ({ title, image}) => {
  const imageDesktop = image.desktop
  const imageMobile = image.mobile

  const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  
  return (
    <div className='relative w-full'>
      {/* Big Screen Image */}
      {isBigScreen && <Image 
        src={imageDesktop.webp.url}
        type={imageDesktop.webp.type}
        fallback={imageDesktop.jpg.url}
        alt={imageDesktop.jpg.alt}
      />}
      {/* Mobile Image */}
      {isMobile && <Image 
        src={imageMobile.webp.url}
        type={imageMobile.webp.type}
        fallback={imageMobile.jpg.url}
        alt={imageMobile.jpg.alt}
      />}

      <a className="absolute w-full h-full leading-7 md:leading-10 py-4 md:py-8 px-5 md:px-10 bottom-0 flex items-end text-white hover:text-black text-3xl md:text-4xl bg-gradient-to-r transition-all duration-1000 md:bg-gradient-to-t from-slate-800 hover:from-transparent to-transparent hover:bg-gradient- hover:bg-slate-300/[.7] uppercase font-josefin-sans" href='#card'>
        <span className='max-w-[160px] md:max-w-[200px]'>{title}</span>
      </a>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object

}

export default Card