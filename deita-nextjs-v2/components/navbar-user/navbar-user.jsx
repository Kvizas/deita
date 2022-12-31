import React, { useContext } from 'react';

import { UserContext } from '../../contexts/user-context/user-context';
import accessibleOnClick from '../../functions/accessibility';
import useComponentVisible from "../../helpers/use-component-visible";

import Button from "../button/button";
import ContextMenu from '../context-menu/context-menu';
import ContextMenuItem from '../context-menu/context-menu-item';
import ContextMenuSpacer from '../context-menu/context-menu-spacer';

import sass from "./navbar-user.module.sass";

import Image from 'next/image';
import { useRouter } from 'next/router';

import ArrowTriangleSVG from "../../images/arrow-triangle.svg";
import AddBalanceSVG from "../../images/add-balance.svg";
import ContextLogoutSVG from "../../images/context-logout.svg";
import ContextSubscriptionsSVG from "../../images/context-subscriptions.svg";
import MyProfileSVG from "../../images/my-profile.svg";

import pb from "../../helpers/pocketbase"; 

export default function NavbarUser() {

    const {user, isLoading, logout} = useContext(UserContext);
    const {
        ref: contextMenuRef, 
        openRef: openContextMenuRef,
        isComponentVisible: isContextMenuVisible, 
        setIsComponentVisible: setContextMenuVisible
    } = useComponentVisible();

    const router = useRouter();

    const openContextMenu = () => {
        setContextMenuVisible(prev => !prev);
    };

    if (user !== undefined && isLoading === false)
        return (
            <div className='flex' style={{gap: "1em"}}>
                <div className={sass.navbarUser__img} style={{backgroundImage: `url(${pb.getFileUrl(user, user.avatar, {'thumb': '32x32'})})`}}></div>
                <div className='flex--align-center'>
                    <div className='subtext'>Vartotojas</div>
                    <div ref={openContextMenuRef} {...accessibleOnClick(openContextMenu)} style={{cursor: "pointer"}}>
                        {user.username}
                        <Image className={sass.navbarUser__arrow + (isContextMenuVisible ? ' ' + sass.navbarUser__arrow__open : '')} src={ArrowTriangleSVG} alt=""/>
                    </div>
                    {isContextMenuVisible ? 
                        <ContextMenu outsideRef={contextMenuRef}>
                            <ContextMenuItem icon={MyProfileSVG} href="profilis">Mano Paskyra</ContextMenuItem>
                            <ContextMenuItem icon={ContextSubscriptionsSVG}>Planai</ContextMenuItem>
                            <ContextMenuItem icon={AddBalanceSVG}>Pridėti lėšų</ContextMenuItem>
                            <ContextMenuSpacer></ContextMenuSpacer>
                            <ContextMenuItem icon={ContextLogoutSVG} action={logout}>Atsijungti</ContextMenuItem>
                        </ContextMenu>
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
