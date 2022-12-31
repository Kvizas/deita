import React from 'react'

import Image from 'next/image';

import accessibleOnClick from '../../functions/accessibility';
import sass from "./context-menu.module.sass";
import { useRouter } from 'next/router';

export default function ContextMenuItem({ href, action, icon, children}) {

  const router = useRouter();

  const onClick = () => {
    action();
    if (href) router.push(href);
  }

  return (
    <div {...accessibleOnClick(onClick)} className={sass.contextMenu__item}>
      {icon ? 
        <Image className={sass.contextMenu__item__image} src={icon} alt=""/>
        : <></>
      }
      {children}
    </div>
  )
}
