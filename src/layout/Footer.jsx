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
      <div className="container max-w-[80vw] mx-auto flex flex-col gap-8">
        <div className="flex w-full items-center justify-between">
            <Logo />
            <Social />
        </div>
        <div className="flex w-full items-center justify-between">
            <Menu data={dataMenu} className="gap-8"/>
            <p className='text-sm text-dark-gray'>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer