import Button from 'components/Button'
import Cards from 'components/Cards'
import React from 'react'

const Creations = () => {
  return (
    <section className='w-full h-full mb-50'>
        <div className="flex w-full justify-between  mb-16">
            <h1 className='text-5xl uppercase font-josefin-sans'>Our creations</h1>
            <Button isButton>See all</Button>
        </div>
        <Cards />
    </section>
  )
}

export default Creations