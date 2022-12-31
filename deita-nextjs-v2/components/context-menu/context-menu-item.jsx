import React from 'react'

import Image from 'next/image';

import accessibleOnClick from '../../functions/accessibility';
import sass from "./context-menu.module.sass";

export default function ContextMenuItem({spacer, action, icon, children}) {
  return (
    <div {...accessibleOnClick(action)} className={sass.contextMenu__item}>
      {icon ? 
        <Image className={sass.contextMenu__item__image} src={icon} alt=""/>
        : <></>
      }
      {children}
    </div>
  )
}
