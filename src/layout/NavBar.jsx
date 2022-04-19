import { useContext } from 'react'
import logo from 'assets/images/logo.svg'
import DataContext from 'context/data/DataContext'

const NavBar = () => {
  const { data } = useContext(DataContext)
  const dataMenu = data.nav.menu;


  return (
    <nav className='mt-10 text-white flex justify-between items-center'>
      <a href="#logo" >
        <img src={logo} alt="logo" />
      </a>
      <ul className='flex gap-4 font-alata text-default font-normal'>
        {dataMenu.map((link) => {
          return (
            <li className='relative capitalize hover:after:content-[""] hover:after:w-6 hover:after:h-[2px] hover:after:absolute hover:after:-bottom-2 hover:after:left-0 hover:after:right-0 hover:after:mx-auto hover:after:bg-white' key={link.id}><a href={link.url}>{link.name}</a></li>
          )
        })}
 
      </ul>
    </nav>
  )
}

export default NavBar