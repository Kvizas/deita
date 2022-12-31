import React from 'react'

import Image from 'next/image';
import accessibleOnClick from '../../functions/accessibility';
import sass from "./context-menu.module.sass";
import ContextArrowSVG from "../../images/context-arrow.svg";
import { useRouter } from 'next/router';

export default function ContextMenuVariableItem({title, variable, variableStyle, meta}) {
  const router = useRouter();

  return (
    <div className={sass.contextMenu__variableItem}>
        <div className={sass.contextMenu__variableItem__title}>{title}</div>
        <div className={sass.contextMenu__variableItem__variableBox}>
            <div style={variableStyle}>{variable}</div>
            <Image src={ContextArrowSVG} alt=""/>
        </div>
        {meta != undefined ?
            <div className={sass.contextMenu__variableItem__metaBox}>
                {meta.map(elem => (
                    <div key={elem.title} className={sass.contextMenu__variableItem__metaBox__metaItem}>
                        <div>{elem.title}</div>
                        <div>{elem.keyValue}</div>
                    </div>
                ))}
            </div>
            : <></>
        }
    </div>
  )
}
