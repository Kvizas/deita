import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import SearchbarInstant from '../searchbar-instant/searchbar-instant'
import Section from '../contextual-section/contextual-section'

import "./header.sass"

export default function Header() {
  return (
    <Section className='header'>
        <div className="header__text">
            <h1>
                Platforma,<br/> skirta atrasti reikiamą medžiagą</h1>
            <div className="header__sub m--hidden">
                278+ vaizdo pamokų, 125+ konspektų, virš 200 išspręstų uždavinių ir visa tai, kad pasiektum daugiau... 
            </div>
        </div>
        <div className='header__img'>
            <StaticImage
                placeholder='tracedSVG'
                src='../../images/caesar_newton_comp.svg'
                layout='constrained'
                width={488}
                alt='Deita matematikos, fizikos, informatikos, istorijos, geografijos ir lietuvių kalbos medžiaga.'
            />
        </div>
        <div className='header__search'>
            <p style={{marginBottom: "2.5vh"}}>
                Galime surasti dominančią didaktinę medžiagą, vadovėlių ir uždavinynų sprendimus iš jūsų įvesto konteksto ar uždavinio sąlygos.
            </p>
            <SearchbarInstant></SearchbarInstant>
        </div>
    </Section>
  )
}
