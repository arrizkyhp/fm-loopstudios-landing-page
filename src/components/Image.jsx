import React from 'react'
import PropTypes from 'prop-types'

const Image = (props) => {
  return (
    <picture className='w-full'>
        <source srcSet={props.src} type={props.type} />
        <img className='w-full' src={props.fallback} alt={props.alt} />
    </picture>
  )
}

Image.propTypes = {
  src: PropTypes.string,
  type: PropTypes.string,
  fallback: PropTypes.string,
  alt: PropTypes.string,

}

export default Image