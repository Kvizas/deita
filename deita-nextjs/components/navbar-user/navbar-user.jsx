import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user-context/user-context';
import accessibleOnClick from '../../functions/accessibility';
import Button from '../button/button';
import ArrowTriangleSVG from "../../images/arrow-triangle.svg";

import sass from "./navbar-user.module.sass";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavbarUser() {

    const {user, isLoading} = useContext(UserContext);

    const router = useRouter();

    if (user !== undefined && isLoading === false)
        return (
            <div className='flex' style={{gap: "1em"}}>
                <div className={sass.navbarUser__img}></div>
                <div className='flex--align-center'>
                    <div className='subtext'>Vartotojas</div>
                    <div>
                        {user.username}
                        <Image className={sass.navbarUser__arrow} src={ArrowTriangleSVG} alt=""/>
                    </div>
                </div>
            </div>
        )
    else if (user === undefined && isLoading == false)
        return (
            <>
                <div className='pointer' {...accessibleOnClick(() => router.push('/prisijungimas'))}>Prisijungti</div>
                <Button onClick={() => router.push('/registracija')}>Registruotis</Button>
            </>
        )
    else {
        console.log(user);
        return (
            <div>
                Loading
            </div>
        )
    }
}
