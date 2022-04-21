import React from 'react'
import logo from 'assets/images/logo.svg'


const Logo = (props) => {
  const className = [props.className]  

  return (
    <a className={`${className.join(" ")}`} href="#logo">
        <img src={logo} alt="logo" />
    </a>
  )
}

export default Logo