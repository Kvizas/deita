import React, { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user-context/user-context';
import accessibleOnClick from '../../functions/accessibility';
import ArrowTriangleSVG from "../../images/arrow-triangle.svg";
import Button from "../button/button";

import sass from "./navbar-user.module.sass";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavbarUser() {

    const {user, isLoading, logout} = useContext(UserContext);
    const [isContextOpen, setIsContextOpen] = useState(false);

    const router = useRouter();

    const openContextMenu = () => {
        setIsContextOpen(!isContextOpen);
    };

    if (user !== undefined && isLoading === false)
        return (
            <div className='flex' style={{gap: "1em"}}>
                <div className={sass.navbarUser__img}></div>
                <div className='flex--align-center'>
                    <div className='subtext'>Vartotojas</div>
                    <div {...accessibleOnClick(openContextMenu)} style={{cursor: "pointer"}}>
                        {user.username}
                        <Image className={sass.navbarUser__arrow + (isContextOpen ? ' ' + sass.navbarUser__arrow__open : '')} src={ArrowTriangleSVG} alt=""/>
                    </div>
                    {isContextOpen ? 
                        <div className={sass.navbarUser__contextMenu}>
                            <div className={sass.navbarUser__contextMenu__btn} {...accessibleOnClick(logout)}>
                                Atsijungti
                            </div>
                        </div>
                        :
                        <></>
                    }
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
        return (
            <div>
                Loading
            </div>
        )
    }
}
