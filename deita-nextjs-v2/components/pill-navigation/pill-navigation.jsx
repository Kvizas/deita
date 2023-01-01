import React from 'react'
import PillNavContextProvider from '../../contexts/pill-navigation-context/pill-navigation-context'

import sass from "./pill-navigation.module.sass"

export default function PillNavigation({ children, style }) {
  return (
    <PillNavContextProvider>
      <div style={style} className={sass.pillNav}>
          {children}
      </div>
    </PillNavContextProvider>
  )
}
