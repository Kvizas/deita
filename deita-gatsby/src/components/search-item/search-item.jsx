import React from 'react'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./search-item.sass"
import { graphql } from 'gatsby';

export default function SearchItem({ item, data }) {

    // const image = getImage(data.allStrapiDisciplina.nodes.Ikona.localFile)
    // console.log(image);

    return (
        <div className='searchitem'>
            {/* <GatsbyImage image={image} alt={item.Disciplina.Pavadinimas}/> */}
            <div>
                <div className='searchitem__source'>DEITA {item.Kategorija?.Pavadinimas}</div>
                <h5 className='searchitem__title'>{item.Pavadinimas}</h5>
                <div className='searchitem__descr'>{item.Aprasymas}</div>
            </div>
        </div>
    )
}

// export const pageQuery = graphql`

// query {
//     allStrapiDisciplina(filter: {Pavadinimas: {eq: "Fizika"}}) {
//       nodes {
//         Ikona {
//           localFile {
//             id
//             childImageSharp {
//               gatsbyImageData(
//                 placeholder: BLURRED
//                 formats: [AUTO, WEBP, AVIF]
//               )
//             }
//           }
//         }
//       }
//     }
//   }
// `