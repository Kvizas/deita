import React from 'react'

import "./navbar-mobile-item.sass";

export default function NavbarMobileItem({ item }) {
  return (
    <a href={item.url} className="navbar__item">
        <img src={item.icon} alt={item.title} />
        {item.title}
    </a>
  )
}
