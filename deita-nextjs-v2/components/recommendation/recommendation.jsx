import React from 'react'

import sass from "./recommendation.module.sass"
import sass_vars from "../../sass/abstracts/_variables.module.sass"

import Shadow from "../../images/shadow.svg";
import LeftConfetty from "../../images/left-confetty.svg";
import RightConfetty from "../../images/right-confetty.svg";
import RecomCard from '../recom-card/recom-card';
import Image from 'next/image';

import HeadSVG from "../../images/bethoven.svg"

export default function Recommendation() {

  return (
    <section className={sass.recom}>
      <h2>
        <span className='primary'>Deita</span> mokymosi platforma <br className='m--hidden'/> jums rekomenduoja
      </h2>

      <div className={sass.recom__side__wrapper} style={{background: `url(${Shadow.src}), linear-gradient(.25turn, ${sass_vars.secondaryColor} 50%, ${sass_vars.primaryColor} 50%)`}}>

        <div className={sass.recom__container}>

          <Image className={sass.recom__side + " " + sass.recom__side__left + " m--hidden"} src={LeftConfetty} alt="Dekoracijos" />
          <Image className={sass.recom__side + " " + sass.recom__side__right + " m--hidden"} src={RightConfetty} alt="Dekoracijos" />

          <Image
            className={"m--hidden " + sass.recom__img}
            src={HeadSVG}
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
