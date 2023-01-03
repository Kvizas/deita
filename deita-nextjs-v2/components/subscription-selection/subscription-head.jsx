import Image from 'next/image'
import React from 'react'
import Button from '../button/button';
import Heading from '../heading/heading';

import sass from "./subscription-selection.module.sass"

export default function SubscriptionHead({ data }) {
  
  const tdStyle = data.outline ? {
    background: data.color + '20',
    border: 'none'
  } : {};

  const imgWrapperStyle = {
    background: data.color + '25'
  };

  return (
    <td className={sass.sub__head} style={tdStyle}>
      <div className={sass.sub__imgWrapper} style={imgWrapperStyle}>
        <Image
          src={data.image}
          width={25}
          height={25}
          alt={data.title + ' prenumerata'}
        />
      </div>
      <Heading level={2} styleLevel={4} className={sass.sub__title}>{data.title} narystė</Heading>

      <div className={sass.sub__price}>
        {data.price.toFixed(2)} €<span className={sass.sub__period}>/mėn</span>
      </div>

      <p>Viso plano (1 mėn) kaina <span style={{fontWeight: 600}}>{data.price.toFixed(2)}€</span></p>

      <Button style={{background: data.color}} className={sass.sub__btn}>{data.btnText}</Button>

    </td>
  )
}
