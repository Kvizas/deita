import React, { useContext, useState } from 'react'

import { NavContext } from '../../contexts/nav-context/nav-context';

import "./navbar.sass";

import Logo from '../logo/logo';
import SearchbarInstant from "../searchbar-instant/searchbar-instant";
import ContextualSection from '../contextual-section/contextual-section';
import LoginSVG from "../../images/login.svg";
import NavbarMobileItem from '../navbar-mobile-item/navbar-mobile-item';
import NavbarUser from '../navbar-user/navbar-user';

export default function Navbar({ noSearchbar }) {
  
  const navigation = useContext(NavContext);

  const [burgerOpened, setBurgerOpened] = useState(false)

  const toggleBurger = () => setBurgerOpened(prev => !prev);
  const exitBurger = () => setBurgerOpened(false);

  return (
    <ContextualSection style={{paddingTop: 0, paddingBottom: 0}}>
      <div className="navbar__fill"></div>
      <div className='navbar__wrapper'>
        <div className="navbar">
          <div className="navbar__logo">
            <Logo style={{width: "140px"}}/>
          </div>

          <div className='navbar__item__list'>
              {navigation.map((n, i) => <a href={n.url} key={i} className="navbar__item">{n.title}</a>)}
          </div>

          {noSearchbar ? <></> :
          <div className="navbar__search">
            <SearchbarInstant small={true}/>
          </div>
          }

          <div className="navbar__auth">
            <NavbarUser/>
          </div>

          <div className="navbar__auth--mobile">
            <div>Prisijungti</div>
            <img src={LoginSVG} alt="Prisijungimas ir registracija"/>
            <div role='button' tabIndex={0} aria-label="Navigation" className="navbar__burger" onClick={toggleBurger} onKeyDown={toggleBurger}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`navbar__m navbar__m__modal ${burgerOpened ? '' : 'navbar__m__modal--hidden'}`}>
        <SearchbarInstant small={true} transform={'left'}/>
        <h5 className='navbar__m__modal__h'>Ieškomiausios skiltys</h5>
        <div className="navbar__m__modal__items">
              {navigation.map((n, i) => <NavbarMobileItem key={i} item={n}/>)}
        </div>
      </div>
      <div role='button' tabIndex={0} aria-label="Hide navigation" className={`navbar__m navbar__m__bg ${burgerOpened ? '' : 'navbar__m__bg--hidden'}`} onClick={exitBurger} onKeyDown={exitBurger} />
    </ContextualSection>
  )
}
