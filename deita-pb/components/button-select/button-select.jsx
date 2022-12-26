import React from 'react'
import { useState } from 'react'
import accessibleOnClick from '../../functions/accessibility';

import sass from "./button-select.module.sass"
import btn_sass from "../button/button.module.sass"

export default function ButtonSelect({ options, active, setActiveCb, style, wrapperClassName }) {

  return (<div className={wrapperClassName}>
    {options.map(option => (
      <div 
        key={option}
        {...accessibleOnClick(() => setActiveCb(option))}
        className={btn_sass.btn + ' ' + sass.btnSelect  + (active === option ? ' active' : '')}
        style={style}
      >
        {option}
      </div>
    ))}
  </div>)
}
