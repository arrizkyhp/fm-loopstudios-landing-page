import React from 'react'
import logo from 'assets/images/logo.svg'

const NavBar = () => {
  return (
    <nav className='mt-10 text-white flex justify-between items-center'>
      <a href="" className=''>
        <img src={logo} alt="logo" />
      </a>
      <ul className='flex gap-4 font-alata text-default font-normal'>
        <li><a href="http://">About</a></li>
        <li><a href="http://">Careers</a></li>
        <li><a href="http://">Events</a></li>
        <li><a href="http://">Products</a></li>
        <li><a href="http://">Support</a></li>
      </ul>
    </nav>
  )
}

export default NavBar