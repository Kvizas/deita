import React from 'react'

export default function Subtext({children, style}) {
  return (
    <div className="subtext" style={style}>{children}</div>
  )
}
