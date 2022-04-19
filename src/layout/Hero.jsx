import { useContext } from 'react'
import DataContext from 'context/data/DataContext'

const Hero = () => {
  const { data } = useContext(DataContext)
  const dataHero = data.hero
  return (
    <div className="h-full flex items-center">
        <h1 className='text-white uppercase text-7xl font-light font-josefin-sans border-2 border-white h-fit py-7 px-7 max-w-2xl'>{dataHero.headline}</h1>
    </div>
  )
}

export default Hero