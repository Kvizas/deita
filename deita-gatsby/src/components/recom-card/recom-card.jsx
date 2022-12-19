import React from 'react'

import "./recom-card.sass";

import Icon from "../../images/announce_icon.svg";

export default function RecomCard({ recom }) {

  const linksnis = () => {
    if (recom.amount % 10 === 0) return "pamokų";
    if (recom.amount % 10 === 1) return "pamoka"; 
    else return "pamokos"; 
  }

  return (
    <div className='recomcard'>
      <div className="recomcard__icon">
        <img src={Icon} alt={recom.title} />
      </div>
      <div className="recomcard__content">
        <h5>{recom.title}</h5>
        <p className="recomcard__subtitle">
          {recom.subtitle}
        </p>
        <p className="recomcard__amount">
          <span className="recomcard__amount__rect">
            {recom.amount}
          </span>
          {linksnis()}
        </p>
      </div>
    </div>
  )
}
