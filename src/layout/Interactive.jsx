import { useContext } from 'react'
import DataContext from 'context/data/DataContext'
import Image from 'components/Image'

const Interactive = () => {
  const { data } = useContext(DataContext)
  const dataInteractive = data.interactive
  const dataImage = dataInteractive.image
  return (
    <section className='flex relative'>
        <Image 
          src={dataImage.webp.url} 
          type={dataImage.webp.type} 
          fallback={dataImage.jpg.url} 
          alt={dataImage.jpg.alt}
        />
        <div className="flex  flex-col gap-8 bg-white px-20 py-20 absolute w-[640px] -right-[460px] -bottom-[90px]">
            <h1 className='text-black uppercase text-5xl font-josefin-sans'>{dataInteractive.subheading}</h1>
            <p className='text-very-dark-gray font-alata leading-7'>{dataInteractive.supportCopy}</p>
        </div>
    </section>
  )
}

export default Interactive