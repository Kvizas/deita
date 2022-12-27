import React from 'react'

import SearchbarInstant from '../searchbar-instant/searchbar-instant'
import Section from '../contextual-section/contextual-section'

import sass from "./hero.module.sass"
import Image from 'next/image'

import HeroSVG from "../../images/caesar_newton_comp.svg"

export default function Hero() {
  return (
    <Section className={sass.hero}>
        <div className={sass.hero__text}>
            <h1>
                Platforma,<br/> skirta atrasti reikiamą medžiagą</h1>
            <div className={sass.hero__sub + " m--hidden"}>
                278+ vaizdo pamokų, 125+ konspektų, virš 200 išspręstų uždavinių ir visa tai, kad pasiektum daugiau... 
            </div>
        </div>
        <div className={sass.hero__img}>
            <Image
                src={HeroSVG}
                alt='Deita matematikos, fizikos, informatikos, istorijos, geografijos ir lietuvių kalbos medžiaga.'
                width={488}
            ></Image>
        </div>
        <div className={sass.hero__search}>
            <p style={{marginBottom: "2.5vh"}}>
                Galime surasti dominančią didaktinę medžiagą, vadovėlių ir uždavinynų sprendimus iš jūsų įvesto konteksto ar uždavinio sąlygos.
            </p>
            <SearchbarInstant></SearchbarInstant>
        </div>
    </Section>
  )
}
