import Button from 'components/Button'
import Cards from 'components/Cards'
import DataContext from 'context/data/DataContext'
import { useContext } from 'react'

const Creations = () => {
  const { data } = useContext(DataContext)
  const dataItem = data.creations.items

  return (
    <section className='w-full h-full mb-50'>
        <div className="flex w-full justify-between  mb-16">
            <h1 className='text-5xl uppercase font-josefin-sans'>{data.creations.title}</h1>
            <Button isButton>See all</Button>
        </div>
        <Cards items={dataItem}/>
    </section>
  )
}

export default Creations