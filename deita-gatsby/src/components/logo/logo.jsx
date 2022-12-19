import { navigate } from 'gatsby';
import React from 'react'
import accessibleOnClick from '../../functions/accessibility';

// import Alpha from "../../images/alpha.svg";

// const s = {
//     letterSpacing: "5px",
//     fontSize: "2.2rem",
//     fontWeight: "bold",
//     userSelect: "none"
// };

// export default function Logo() {
//     return (
//         <div style={s}>DE<span style={{color: "var(--primary-color)"}}>IT</span>
//         <img src={Alpha} alt="Alpha" style={{height: "1.57rem"}}/>
//         </div>
//     )
// }

import LogoSVG from "../../images/logo.svg";

export default function Logo({style}) {
    return (
        <a {...accessibleOnClick(() => navigate('/'))}>
            <img src={LogoSVG} alt="Deita duomenų paieškos ir mokymosi platforma" style={style}/>
        </a>
    )
}
