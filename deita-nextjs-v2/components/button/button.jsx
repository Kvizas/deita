import React from 'react'
import accessibleOnClick from '../../functions/accessibility'

import sass from "./button.module.sass"

export default function Button({ children, className, onClick = () => {} }) {
  return (
    <div className={sass.btn + (className ? ' ' + className : '')} {...accessibleOnClick(onClick)}>{children}</div>
  )
}
