import React from 'react'
import Card from './Card'

const Cards = (props) => {
  const items = props.items
  const className = [props.className]
  return (
    <div className={`cards grid grid-cols-1 md:grid-cols-4 gap-8 ${className.join(" ")}`}>
            {items.map((item) => {
              return <Card key={item.id} image={item.image} title={item.title}/>
            })}
      
    </div>
  )
}

export default Cards