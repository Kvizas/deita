import Image from 'next/image'
import React from 'react'

import sass from "./searchbar-instant.module.sass"

export default function SearchbarItem({ title, source, img_src}) {
  return (
    <div className={sass.searchbar__item}>
        <Image src={img_src} alt={title}/>
        <div>
          <div className={sass.searchbar__item__source}>{source}</div>
          <div className={sass.searchbar__item__title}>{title}</div>
        </div>
    </div>
  )
}
