import Image from 'next/image';
import React from 'react'

import sass from "./navbar-mobile-item.module.sass";

export default function NavbarMobileItem({ item }) {
  return (
    <a href={item.url} className={sass.navbar__item}>
        <Image src={item.icon} alt={item.title} />
        {item.title}
    </a>
  )
}
