import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/user-context/user-context';

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
    <div className={sass.auth}>
      {children}
    </div>
  )
}
