import React from 'react'

export default function Heading({children, className, style, level = 2, styleLevel = 2, margin = true }) {

    const resultClass = "hstyle-h" + styleLevel + (className ? ' ' + className : '') + (!margin ? ' margin--0' : '');

    if (level === 1)
        return <h1 style={style} className={resultClass}>{children}</h1>
    else if (level === 2)
        return <h2 style={style} className={resultClass}>{children}</h2>
    else if (level === 3)
        return <h3 style={style} className={resultClass}>{children}</h3>
    else if (level === 4)
        return <h4 style={style} className={resultClass}>{children}</h4>
    else if (level === 5)
        return <h5 style={style} className={resultClass}>{children}</h5>
    else
        return <h6 style={style} className={resultClass}>{children}</h6>
}
