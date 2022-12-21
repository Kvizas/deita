import React from 'react'

import sass from "./book-header.module.sass"

import ArrowSVG from "../../images/arrow-shy-left.svg"

import accessibleOnClick from "../../functions/accessibility"

export default function BookHeader({ data }) {

    const img = getImage(data.Paveikslelis.file)

    const goBack = () => {
        navigate('/paieska')
    }

    return (
        <section className='flex flex--align-center'>
            {/* <GatsbyImage
                image={img}
                alt={data.Pavadinimas}
                width={125}
                className={'book-header__img'}
            /> */}
            <div>
                <h1 className='h3' style={{maxWidth: "850px", margin: "5px"}}>{data.Pavadinimas}</h1>
                <div {...accessibleOnClick(goBack)} className='secondary-text-color pointer'><img src={ArrowSVG} alt=""/> Grįžti į knygos sprendimų sąvadą</div>
            </div>
        </section>
    )
}
