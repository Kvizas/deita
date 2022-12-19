import React from 'react'
import accessibleOnClick from '../../functions/accessibility'

import "./button.sass"

export default function Button({ children, onClick = () => {} }) {
  return (
    <div className='btn' {...accessibleOnClick(onClick)}>{children}</div>
  )
}
