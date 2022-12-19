import * as React from "react"
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import BookHeader from '../../components/book-header/book-header'
import { graphql } from 'gatsby'
import BookBrowser from "../../components/book-browser/book-browser"

export default function Book({ data }) {

  console.log(data);

  return (
    <>
      <Navbar />
      <BookHeader data={data.strapiKnyga} />
      <BookBrowser data={data.strapiKnyga} />
      <Footer />
    </>
  )
}

export const query = graphql`
  query($id: String) {
    strapiKnyga(id: {eq: $id}) {
      Pavadinimas
      Paveikslelis {
        file {
          childImageSharp {
            gatsbyImageData(width: 125, placeholder: DOMINANT_COLOR)
          }
        }
      }
      Sprendimai {
        Pavadinimas
        Skyrius
        Zingsniai {
          Turinys
        }
      }
    }
  }
`