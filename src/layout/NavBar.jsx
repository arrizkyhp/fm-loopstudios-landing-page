import { useContext } from 'react'
import DataContext from 'context/data/DataContext'
import Menu from 'components/Menu'
import Logo from 'components/Logo'

const NavBar = () => {
  const { data } = useContext(DataContext)
  const dataMenu = data.nav.menu;


  return (
    <nav className='mt-10  flex justify-between items-center'>
      <Logo />
      <Menu data={dataMenu} className="gap-5"/>
    </nav>
  )
}

export default NavBar