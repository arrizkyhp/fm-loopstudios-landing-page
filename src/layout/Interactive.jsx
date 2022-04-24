import { useContext } from 'react'
import { useMediaQuery } from 'react-responsive'
import DataContext from 'context/data/DataContext'
import Image from 'components/Image'

const Interactive = () => {
  const { data } = useContext(DataContext)
  const dataInteractive = data.interactive

  const dataImageDesktop = dataInteractive.image.desktop
  const dataImageMobile = dataInteractive.image.mobile
 
  const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  return (
    <section className='grid md:flex md:flex-col relative'>
        {isBigScreen && <Image 
          src={dataImageDesktop.webp.url} 
          type={dataImageDesktop.webp.type} 
          fallback={dataImageDesktop.jpg.url} 
          alt={dataImageDesktop.jpg.alt}
        />}
        {isMobile && <Image 
          src={dataImageMobile.webp.url} 
          type={dataImageMobile.webp.type} 
          fallback={dataImageMobile.jpg.url} 
          alt={dataImageMobile.jpg.alt}
        />}
        <div className="flex  flex-col gap-5 md:gap-8 bg-white px-8 md:px-20 py-14 md:py-20 relative md:absolute md:w-[640px] md:-right-[460px] md:-bottom-[90px]">
            <h1 className='text-black uppercase text-4xl text-center md:text-left md:text-5xl font-josefin-sans'>{dataInteractive.subheading}</h1>
            <p className='text-very-dark-gray text-center md:text-left font-alata leading-7'>{dataInteractive.supportCopy}</p>
        </div>
    </section>
  )
}

export default Interactive