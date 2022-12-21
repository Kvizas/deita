import React from 'react'

import sass from "./search-item.module.sass"

export default function SearchItem({ item, data }) {

    // const image = getImage(data.allStrapiDisciplina.nodes.Ikona.localFile)
    // console.log(image);

    return (
        <div className={sass.searchItem}>
            {/* <GatsbyImage image={image} alt={item.Disciplina.Pavadinimas}/> */}
            <div>
                <div className={sass.searchItem__source}>DEITA {item.Kategorija?.Pavadinimas}</div>
                <h5 className={sass.searchItem__title}>{item.Pavadinimas}</h5>
                <div className={sass.searchItem__descr}>{item.Aprasymas}</div>
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