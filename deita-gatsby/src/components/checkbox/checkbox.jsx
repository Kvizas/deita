import React from 'react'

export default function Checkbox({ id, onChange, children }) {
  return (
    <>
      <input onChange={e => onChange(e.target.checked)} id={id} type={"checkbox"}/>
      <label for={id}>{children}</label>
    </>
  )
}
