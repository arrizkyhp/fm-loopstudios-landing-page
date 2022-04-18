import React from 'react'

const Button = (props) => {
  const className = [props.className];
  if(props.isButton) className.push("uppercase font-alata border-2 border-black bg-white hover:bg-black tracking-[0.25em] text-medium text-black hover:text-white w-40")

  return (
    <button
      className={`${className.join(" ")}`}
    >
      {props.children}
    </button>
  )
}

export default Button