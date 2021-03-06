import Button from 'components/Button'
import Cards from 'components/Cards'
import DataContext from 'context/data/DataContext'
import { useContext } from 'react'

const Creations = () => {
  const { data } = useContext(DataContext)
  const dataItem = data.creations.items

  return (
    <div className='w-full h-full mb-50 grid grid-cols-1 md:grid-cols-2 gap-y-11 md:gap-y-20'>
      <p className='text-3xl justify-self-center md:justify-self-start md:text-5xl uppercase font-josefin-sans'>{data.creations.title}</p>
      <Button className="justify-self-center md:justify-self-end row-start-3 md:row-span-1 py-2 md:py-3" isButton>See all</Button>
      <Cards className="col-span-full" items={dataItem}/>
    </div>
  )
}

export default Creations