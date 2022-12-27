import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/user-context/user-context';

import Icon from "../../images/undraw/auth.svg";

import sass from "./auth-box.module.sass"

export default function AuthBox({ children }) {
  
  const { user, isLoading } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {

    if (user != undefined && !isLoading) {
      router.push('/profilis')
    }

  }, [user, isLoading, router])

  return (
    <div className='auth flex'>

        <div className={sass.auth__img + ' w--50'}><Image src={Icon} width="300" alt="deita.lt - autentifikacija"></Image></div>

        <div className='w--50'>

          {children}

        </div>
    </div>
  )
}
