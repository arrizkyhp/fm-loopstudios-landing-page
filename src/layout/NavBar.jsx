import { useContext, useState } from 'react'
import DataContext from 'context/data/DataContext'
import Menu from 'components/Menu'
import Logo from 'components/Logo'

const NavBar = () => {
  const { data } = useContext(DataContext)
  const dataMenu = data.nav.menu;

  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = (e) => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className={`mt-10  flex justify-between items-center`}>
      <Logo className="z-20"/>
      <Menu data={dataMenu} className="gap-5 hidden capitalize"/>

      {/* Burgir */}
      <div className="block relative md:hidden cursor-pointer w-10 h-full z-20" id='menuToggle'>
        <input className='absolute block cursor-pointer w-10 h-8 z-30 opacity-0 top-0 left-0 focus:outline-none' id='input-checkbox' onChange={handleToggleMenu} type="checkbox" aria-label='open menu' aria-controls='burgir' aria-expanded={menuOpen ? true : false} />
        <div className="" id='burgir'>
          <span className={`block w-8 h-[2px] mb-[6px] relative bg-white ${menuOpen ? 'rotate-45 -translate-y-0.5' :  'rotate-0'}`}></span>
          <span className={`block w-8 h-[2px] mb-[6px] relative bg-white ${menuOpen ? 'opacity-0' :  'opacity-100'}`}></span>
          <span className={`block w-8 h-[2px] mb-[6px] relative bg-white ${menuOpen ? '-rotate-45 translate-y-[3.5px] w-8' :  'rotate-0'}`}></span>
        </div>
      </div>
      <div className={`w-full flex h-full items-center bg-black absolute z-10 transition-all md:hidden top-0 left-0  ${menuOpen ? 'w-full' : 'w-0 '}`}>
        <Menu data={dataMenu} className={`flex-col font-josefin-sans uppercase ml-8 text-3xl gap-8 ${menuOpen ? 'flex' : 'hidden'}`} />
      </div>
    </nav>
  )
}

export default NavBar