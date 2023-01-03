import React from 'react'

import { subscriptionConfig } from "./subscriptions"

import NoSVG from "../../images/subFeatureNo.svg"
import YesSVG from "../../images/subFeatureYes.svg"
import Image from 'next/image'

import sass from "./subscription-selection.module.sass"

export default function SubscriptionFeatureRow({ feature }) {

  const renderSubFeature = sub => {
    
    
    const all_features = subscriptionConfig.all_features;
    const include = sub.features.includes(feature);
    const size = include ? 18 : 12;
    
    const outlineStyle = sub.outline ? {
      borderLeft: 'solid 4px ' + sub.color + '25',
      borderRight: 'solid 4px ' + sub.color + '25'
    } : {};
    
    const outlineBottomStyle = (
      all_features[all_features.length - 1] === feature && sub.outline ?
      {
        borderBottom: 'solid 4px ' + sub.color + '25'
      } : {}
    );

    return (
      <td style={{...outlineStyle, ...outlineBottomStyle}}>
          <Image
            src={include ? YesSVG : NoSVG}
            width={size} height={size}
            alt={sub.title + (include ? " turi " : " neturi ") + feature}
          />
      </td>
    )
  }

  return (
    <tr className={sass.feature}>
      <td>{feature}</td>
      {subscriptionConfig.subs.map(renderSubFeature)}
    </tr>
  )
}
