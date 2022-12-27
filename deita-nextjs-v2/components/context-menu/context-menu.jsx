import React from 'react'

import sass from "./context-menu.module.sass";

export default function ContextMenu({ outsideRef, children }) {
  return (
    <div ref={outsideRef} className={sass.contextMenu}>
        {children}
    </div>
  )
}
