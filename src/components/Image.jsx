import React from 'react'

const Image = (props) => {
  return (
    <picture className='w-full'>
        <source srcSet={props.src} type={props.type} />
        <img className='w-full' src={props.fallback} alt={props.alt} />
    </picture>
  )
}

export default Image