import DataContext from 'context/data/DataContext'
import { useContext } from 'react'

const Social = () => {
    const { data } = useContext(DataContext)
    const dataSocial = data.social;
  return (
    <div className='flex  items-center gap-5'>
        {dataSocial.map((social) => {
           return ( 
           <a className='relative hover:after:content-[""] hover:after:w-6 hover:after:h-[2px] hover:after:absolute hover:after:-bottom-2 hover:after:left-0 hover:after:right-0 hover:after:mx-auto hover:after:bg-white' href={social.url} target="_blank" rel='noreferrer'>
                <img src={social.icon} alt={social.name} />
                <div className="sr-only">
                    {social.name}
                </div>
            </a>
            )
        })}
    </div>
  )
}

export default Social