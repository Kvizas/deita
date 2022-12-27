import React from 'react'
import sass from "./book-header.module.sass"
import ArrowSVG from "../../images/arrow-shy-left.svg"
import accessibleOnClick from "../../functions/accessibility"
import Heading from "../heading/heading";
import {useRouter} from "next/router";

import pb from "../../helpers/pocketbase"; 


export default function BookHeader({ data }) {

    const router = useRouter();

    const goBack = () => {
        router.push('/paieska');
    }

    return (
        <section className='flex'>
            <div className={sass.bookHeader__img} style={{backgroundImage: `url(${pb.getFileUrl(data, data.image)})`}}></div>
            <div className='flex flex--align-center' style={{flexDirection: "column"}}>
                <Heading style={{maxWidth: "850px", margin: "5px", lineHeight: "1.1"}} styleLevel={3} level={1}>{data.title}</Heading>
                <div {...accessibleOnClick(goBack)} className='secondary-text-color pointer'><img src={ArrowSVG} alt=""/> Grįžti į knygos sprendimų sąvadą</div>
            </div>
        </section>
    )
}
