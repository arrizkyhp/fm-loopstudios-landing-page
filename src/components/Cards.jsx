import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'

const Cards = (props) => {
  const items = props.items
  const className = [props.className]
  return (
    <div className={`cards grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 ${className.join(" ")}`}>
            {items.map((item) => {
              return <Card key={item.id} image={item.image} title={item.title}/>
            })}
      
    </div>
  )
}

Cards.propTypes = {
  className: PropTypes.string
}

export default Cards