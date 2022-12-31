import React from 'react'
import accessibleOnClick from '../../functions/accessibility'

import sass from "./button.module.sass"

export default function Button({ transparent, children, className, style, onClick = () => {} }) {

  className = (sass.btn
    + (className ? ' ' + className : '')
    +  (transparent ? ' ' + sass['btn--transparent'] : '')
    )

  return (
    <div
      className={className}
      {...accessibleOnClick(onClick)}
      style={style}
    >
      {children}
    </div>
  )
}
