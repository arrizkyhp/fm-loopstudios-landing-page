import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const className = [props.className];

  if(props.isButton) className.push("uppercase font-alata border-2 transition-all duration-500 border-black bg-white hover:bg-black tracking-[0.25em] text-medium text-black hover:text-white w-40")

  return (
    <button
      className={`${className.join(" ")}`}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string
}

export default Button

