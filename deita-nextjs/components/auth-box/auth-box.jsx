import Image from 'next/image';
import React from 'react'

import Icon from "../../images/undraw/auth.svg";

import sass from "./auth-box.module.sass"

export default function AuthBox({ children }) {
  return (
    <div className='auth flex'>

        <div className={sass.auth__img + ' w--50'}><Image src={Icon} width="300" alt="deita.lt - autentifikacija"></Image></div>

        <div className='w--50'>

          {children}

        </div>
    </div>
  )
}
