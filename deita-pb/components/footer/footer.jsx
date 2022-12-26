import React from 'react'
import Logo from '../logo/logo'

import sass from "./footer.module.sass"

import FacebookSVG from "../../images/facebook.svg"
import InstagramSVG from "../../images/instagram.svg"
import DiscordSVG from "../../images/discord.svg"
import TiktokSVG from "../../images/tiktok.svg"
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <section className={sass.footer}>
        <div className={sass.footer__credentials}>
            <Logo style={{width: "110px", display: "block"}}/>
            <p>
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={sass.footer__social}>
                <Image src={FacebookSVG} alt="Sekite Deita socialiniuose tinkluose - Facebook." />
                <Image src={InstagramSVG} alt="Sekite Deita socialiniuose tinkluose - Instagram." />
                <Image src={DiscordSVG} alt="Sekite Deita socialiniuose tinkluose - Discord." />
                <Image src={TiktokSVG} alt="Sekite Deita socialiniuose tinkluose - Tiktok." />
            </div>
        </div>
        <div className={sass.footer__nav}>
            <div className={sass.footer__nav__col}>
                <h5 className={sass.footer__nav__h}>Navigacija</h5>
                <Link href='/'>Konspektai</Link>
                <Link href='/'>Sprendimai</Link>
                <Link href='/'>Prenumeratos</Link>
            </div>
            <div className={sass.footer__nav__col}>
                <h5 className={sass.footer__nav__h}>Svetainė</h5>
                <Link href='/'>Privatumo politika</Link>
                <Link href='/'>Naudojimosi sąlygos</Link>
                <Link href='/'>Šaltiniai</Link>
                <Link href='/'>Slapukai</Link>
            </div>
            <div className={sass.footer__nav__col}>
                <h5 className={sass.footer__nav__h}>Kontaktai</h5>
                <p className={sass.footer__text}>Pramonės pr. 20, LT-50468 Panevėžys</p>
                <p className={sass.footer__text}>+370 616 55555</p>
                <p className={sass.footer__text}>info@deita.lt</p>
            </div>
        </div>
    </section>
  )
}
