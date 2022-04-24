import React from 'react'
import logo from 'assets/images/logo.svg'
import PropTypes from 'prop-types'

const Logo = (props) => {
  const className = [props.className] 
   
  return (
    <a className={`${className.join(" ")}`} href="#logo">
        <img src={logo} alt="logo" />
    </a>
  )
}

Logo.propTypes = {
  className: PropTypes.string
}

export default Logo