import React from 'react'
import sass from "./book-header.module.sass"
import ArrowSVG from "../../images/arrow-shy-left.svg"
import accessibleOnClick from "../../functions/accessibility"
import Heading from "../heading/heading";
import {useRouter} from "next/router";

import pb from "../../helpers/pocketbase"; 

export default function BookHeader({ book }) {

    const router = useRouter();

    return (
        <section className='flex'>
            <div className={sass.bookHeader__img} style={{backgroundImage: `url(${pb.getFileUrl(book, book.image)})`}}></div>
            <div className='flex flex--align-center' style={{flexDirection: "column"}}>
                <Heading style={{maxWidth: "850px", margin: "5px", lineHeight: "1.1"}} styleLevel={3} level={1}>{book.title}</Heading>
                <div {...accessibleOnClick(router.back)} className='secondary-text-color pointer'><img src={ArrowSVG} alt=""/> Grįžti į knygų sprendimų sąvadą</div>
            </div>
        </section>
    )
}
