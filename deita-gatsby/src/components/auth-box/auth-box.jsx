import React from 'react'

import Icon from "../../images/undraw/auth.svg";

import "./auth-box.sass"

export default function AuthBox({ children }) {
  return (
    <div className='auth flex'>

        <div className='auth__img w--50'><img src={Icon} width="300"></img></div>

        <div className='w--50'>

          {children}

        </div>
    </div>
  )
}
