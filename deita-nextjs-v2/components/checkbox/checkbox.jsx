import Image from 'next/image'
import React, { useContext, useState } from 'react'

import sass from "./checkbox.module.sass"

import CheckSVG from "../../images/check.svg"

import accessibleOnClick from '../../functions/accessibility'
import { FormContext } from '../../contexts/form-context/form-context'

export default function Checkbox({ id, children, defaultValue = false }) {

  const { fields, setFields } = useContext(FormContext)

  const [checked, setChecked] = useState(defaultValue)

  const onClick = () => {
    setChecked(prev => {
      setFields({...fields, [id]: !prev})
      return !prev
    })
  }

  return (
    <div className={sass.checkbox__wrapper}>
      <div className={sass.checkbox + ' pointer'} {...accessibleOnClick(onClick)}>
        {checked ?
          <Image style={{transform: "scale(.8)"}} src={CheckSVG} alt="Pažymėta varnele"/>
          :
          <></>
        }
      </div>
      <div className='pointer' {...accessibleOnClick(onClick)}>{children}</div>
    </div>
  )
}
