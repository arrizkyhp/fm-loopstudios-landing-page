import React from 'react'
import Card from './Card'

const Cards = ({ items }) => {

  return (
    <div className="cards grid grid-cols-4 gap-8">
            {items.map((item) => {
              return <Card key={item.id} image={item.image} title={item.title}/>
            })}
      
    </div>
  )
}

export default Cards