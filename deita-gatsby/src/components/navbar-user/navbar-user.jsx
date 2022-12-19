import { navigate } from 'gatsby';
import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user-context/user-context';
import accessibleOnClick from '../../functions/accessibility';
import Button from '../button/button';
import ArrowTriangleSVG from "../../images/arrow-triangle.svg";

import "./navbar-user.sass";

export default function NavbarUser() {

    const [user, isLoading] = useContext(UserContext);

    if (user !== undefined && isLoading === false)
        return (
            <div className='flex' style={{gap: "1em"}}>
                <div className='navbar-user__img'></div>
                <div className='flex--align-center'>
                    <div className='subtext'>Vartotojas</div>
                    <div>
                        {user.username}
                        <img className='navbar-user__arrow' src={ArrowTriangleSVG}></img>
                    </div>
                </div>
            </div>
        )
    else if (user === undefined && isLoading == false)
        return (
            <>
                <div className='pointer' {...accessibleOnClick(() => navigate('/prisijungimas'))} >Prisijungti</div>
                <Button onClick={() => navigate('/registracija')}>Registruotis</Button>
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
