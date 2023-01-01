import React, { useContext, useEffect, useId } from 'react'
import { PillNavContext } from '../../contexts/pill-navigation-context/pill-navigation-context'
import accessibleOnClick from '../../functions/accessibility'

import sass from "./pill-navigation.module.sass"

export default function Pill({ children, defaultActive = false }) {

  const id = useId();

  const { active, setActive } = useContext(PillNavContext)

  const className = sass.pillNav__pill + (active === id ? ` ${sass['pillNav__pill--active']}` : '')

  const onClick = () => {
    setActive(id);
  }

  useEffect(() => {
    if (defaultActive) setActive(id)
  }, [])

  return (
    <div className={className} {...accessibleOnClick(onClick)}>{children}</div>
  )
}
