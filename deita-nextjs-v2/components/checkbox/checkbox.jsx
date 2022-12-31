import React, { useState } from 'react'

import sass from "./checkbox.module.sass"

export default function Checkbox({ onChange, children, defaultValue = false }) {

  const [checked, setChecked] = useState(defaultValue)

  const onClick = () => {
    
  }

  return (
    <div className={sass.checkbox__wrapper}>
      <div onClick={onClick} className={sass.checkbox}></div>
      <div>{children}</div>
    </div>
  )
}
