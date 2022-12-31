import React, { useContext } from 'react'
import { FormContext } from '../../contexts/form-context/form-context';

import sass from "./_input.module.sass"

export default function Input({ label, placeholder, type = 'text', style }) {

  const { fields, setFields } = useContext(FormContext);

  return (
    <div className={sass.input__wrapper} style={style}>
      <label className={sass.input__label} htmlFor={label}>{label}</label>
      <input className={sass.input} id={label} placeholder={placeholder} type={type}></input>
    </div>
  )
}
