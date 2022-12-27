import * as React from "react"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import Hero from "../components/hero/hero"
import Recommendation from "../components/recommendation/recommendation"

// markup
const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Recommendation />
      <Footer />
    </main>
  )
}

export default IndexPage
