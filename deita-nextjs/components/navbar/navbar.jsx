import React, { useContext, useState } from 'react'

import { NavContext } from '../../contexts/nav-context/nav-context';

import sass from "./navbar.module.sass";

import Logo from '../logo/logo';
import SearchbarInstant from "../searchbar-instant/searchbar-instant";
import ContextualSection from '../contextual-section/contextual-section';
import LoginSVG from "../../images/login.svg";
import NavbarMobileItem from '../navbar-mobile-item/navbar-mobile-item';
import NavbarUser from '../navbar-user/navbar-user';
import Image from 'next/image';

export default function Navbar({ noSearchbar }) {
  
  const navigation = useContext(NavContext);

  const [burgerOpened, setBurgerOpened] = useState(false)

  const toggleBurger = () => setBurgerOpened(prev => !prev);
  const exitBurger = () => setBurgerOpened(false);

  return (
    <ContextualSection style={{paddingTop: 0, paddingBottom: 0}}>
      <div className={sass.navbar__fill}></div>
      <div className={sass.navbar__wrapper}>
        <section className={sass.navbar}>
          <div className={sass.navbar__logo}>
            <Logo style={{width: "140px"}}/>
          </div>

          <div className={sass.navbar__item__list}>
              {navigation.map((n, i) => <a href={n.url} key={i} className={sass.navbar__item}>{n.title}</a>)}
          </div>

          {noSearchbar ? <></> :
          <div className={sass.navbar__search}>
            <SearchbarInstant small={true}/>
          </div>
          }

          <div className={sass.navbar__auth}>
            <NavbarUser/>
          </div>

          <div className={sass.navbar__auth__mobile}>
            <div>Prisijungti</div>
            <Image src={LoginSVG} alt="Prisijungimas ir registracija"></Image>
            <div role='button' tabIndex={0} aria-label="Navigation" className={sass.navbar__burger} onClick={toggleBurger} onKeyDown={toggleBurger}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </section>
      </div>
      <div className={sass.navbar__m + ' ' + sass.navbar__m__modal + (burgerOpened ? '' : sass.navbar__m__modal__hidden)}>
        <SearchbarInstant small={true} transform={'left'}/>
        <h5 className={sass.navbar__m__modal__h}>Ieškomiausios skiltys</h5>
        <div className={sass.navbar__m__modal__items}>
              {navigation.map((n, i) => <NavbarMobileItem key={i} item={n}/>)}
        </div>
      </div>
      <div role='button' tabIndex={0} aria-label="Hide navigation" className={sass.navbar__m + ' ' + sass.navbar__m__bg + (burgerOpened ? '' : sass.navbar__m__bg__hidden)} onClick={exitBurger} onKeyDown={exitBurger} />
    </ContextualSection>
  )
}
