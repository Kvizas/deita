import React from 'react'

export default function SearchbarItem({ title, source, img_src}) {
  return (
    <div className='searchbar__item'>
        <img src={img_src} alt={title}/>
        <div>
          <div className='searchbar__item__source'>{source}</div>
          <div className='searchbar__item__title'>{title}</div>
        </div>
    </div>
  )
}
