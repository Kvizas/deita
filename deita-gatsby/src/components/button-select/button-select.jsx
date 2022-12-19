import React from 'react'
import { useState } from 'react'
import accessibleOnClick from '../../functions/accessibility';

import "./button-select.sass"

export default function ButtonSelect({ options, active, setActiveCb, style, wrapperClassName }) {

  return (<div className={wrapperClassName}>
    {options.map(option => (
      <div 
        key={option}
        {...accessibleOnClick(() => setActiveCb(option))}
        className={'btn btn-select' + (active === option ? ' active' : '')}
        style={style}
      >
        {option}
      </div>
    ))}
  </div>)
}
