import { useContext } from 'react'
import Social from 'components/Social'
import DataContext from 'context/data/DataContext'
import Menu from 'components/Menu'
import Logo from 'components/Logo'

const Footer = () => {
    const { data } = useContext(DataContext)
    const dataMenu = data.nav.menu;
  return (
    <footer className="flex bg-black h-full w-full py-16">
      <div className="container max-w-[80vw] mx-auto  grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-0 md:gap-8">
            <Logo className="justify-self-center md:justify-self-start mb-10 md:mb-0"/>
            <Social className="justify-self-center md:justify-self-end mb-5 md:mb-0 row-start-3 md:row-start-1 md:col-start-2" />
            <Menu data={dataMenu} className=" gap-5 md:gap-8 justify-self-center md:justify-self-start flex-col md:flex-row text-center mb-10 md:mb-0"/>
            <p className='text-sm font-alata text-dark-gray justify-self-center md:justify-self-end'>© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer