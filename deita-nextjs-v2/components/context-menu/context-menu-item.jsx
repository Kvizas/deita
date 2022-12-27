import React from 'react'

import accessibleOnClick from '../../functions/accessibility';
import sass from "./context-menu.module.sass";

export default function ContextMenuItem({action, children}) {
  return (
    <div {...accessibleOnClick(action)} className={sass.contextMenu__item}>{children}</div>
  )
}
