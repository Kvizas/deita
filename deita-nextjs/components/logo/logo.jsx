import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import LogoSVG from "../../images/logo.svg";

export default function Logo({style}) {
    return (
        <Link href='/' className='pointer'>
            <Image src={LogoSVG} alt="Deita duomenų paieškos ir mokymosi platforma" style={style}></Image>
        </Link>
    )
}
