import React from 'react'
import SubscriptionFeatureRow from './subscription-feature-row'
import SubscriptionHead from './subscription-head'

import sass from "./subscription-selection.module.sass"

import { subscriptionConfig } from "./subscriptions"

export default function PlanSelection({ style }) {

    return (
        <table className={sass.subSelection} style={style}>
            <thead>
                <tr>

                    <td></td>

                    {subscriptionConfig.subs.map(sub =>
                        <SubscriptionHead key={sub.title} data={sub}></SubscriptionHead>
                    )}

                </tr>
            </thead>
            <tbody>

                {
                    subscriptionConfig.all_features.map(feature => 
                        <SubscriptionFeatureRow key={feature} feature={feature} />
                    )
                }

            </tbody>
        </table>
    )
}
