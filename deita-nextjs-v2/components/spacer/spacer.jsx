import React from 'react'

import sass from "./spacer.module.sass";

export default function Spacer({ content }) {

    if (!content)
        return (
            <div className={sass.spacer__wrapper}>
                <div className={sass.spacer}/>
            </div>
        )

    return (
        <div className={sass.spacer__wrapper}>
            <div className={sass.spacer}/>
            <div className={sass.spacer__content}>{content}</div>
            <div className={sass.spacer}/>
        </div>
    )
}
