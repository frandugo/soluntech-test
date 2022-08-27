import React from 'react'

export const CardItem = ({characters: {name, image, type, species }}) => {
  return (
    <div className='card'>
        <h2 className='card__name'>{ name }</h2>
        <div className='card__image'>
          <img src={ image } alt={ name } />
        </div>
        <div className='card__info'>
          <span className='card__type'>{ type }</span>
          { type && <span className='card__specie'>{ species }</span> }
        </div>
    </div>
  )
}
