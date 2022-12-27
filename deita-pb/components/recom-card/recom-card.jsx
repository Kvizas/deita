import React from 'react'

import sass from "./recom-card.module.sass";

import Icon from "../../images/announce_icon.svg";
import Image from 'next/image';

export default function RecomCard({ recom }) {

  const linksnis = () => {
    if (recom.amount % 10 === 0) return "pamokų";
    if (recom.amount % 10 === 1) return "pamoka"; 
    else return "pamokos"; 
  }

  return (
    <div className={sass.recomCard}>
      <div className={sass.recomCard__icon}>
        <Image src={Icon} alt={recom.title} />
      </div>
      <div className={sass.recomCard__content}>
        <h5>{recom.title}</h5>
        <p className={sass.recomCard__subtitle}>
          {recom.subtitle}
        </p>
        <p className={sass.recomCard__amount}>
          <span className={sass.recomCard__amount__rect}>
            {recom.amount}
          </span>
          {linksnis()}
        </p>
      </div>
    </div>
  )
}
