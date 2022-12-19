import React from 'react'

import "./recommendation.sass"

import Shadow from "../../images/shadow.svg";
import LeftConfetty from "../../images/left-confetty.svg";
import RightConfetty from "../../images/right-confetty.svg";
import RecomCard from '../recom-card/recom-card';
import { StaticImage } from 'gatsby-plugin-image';

export default function Recommendation() {
  return (
    <section className='recom'>
      <h2>
        <span className='primary'>Deita</span> mokymosi platforma <br className='m--hidden'/> jums rekomenduoja
      </h2>

      <div className='recom__side__wrapper' style={{background: `url(${Shadow}), linear-gradient(.25turn, var(--secondary-color) 50%, var(--primary-color) 50%)`}}>

        
        <div className="recom__container">

          <img className="m--hidden recom__side recom__side--left" src={LeftConfetty} alt="Dekoracijos" />
          <img className="m--hidden recom__side recom__side--right" src={RightConfetty} alt="Dekoracijos" />

          <StaticImage
            className="m--hidden recom__img"
            src='../../images/bethoven.svg'
            placeholder='tracedSVG'
            alt="Liudvigas van Bethovenas"
            width={400}
          />

            <RecomCard recom={{
              title: "Lietuvių kalba",
              subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
              amount: 210
            }}></RecomCard>
            <RecomCard recom={{
              title: "Matematika",
              subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
              amount: 3215
            }}></RecomCard>
            <RecomCard recom={{
              title: "Fizika",
              subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
              amount: 42
            }}></RecomCard>
            <RecomCard recom={{
              title: "Informatika",
              subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
              amount: 1456
            }}></RecomCard>
            <RecomCard recom={{
              title: "Istorija",
              subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
              amount: 651
            }}></RecomCard>
            <RecomCard recom={{
              title: "Geografija",
              subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
              amount: 121
            }}></RecomCard>
        </div>
      </div>
    </section>
  )
}
