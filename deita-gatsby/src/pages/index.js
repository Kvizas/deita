import * as React from "react"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import Recommendation from "../components/recommendation/recommendation"

import "./index.sass"

// markup
const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <Recommendation />
      <Footer />
    </main>
  )
}

export default IndexPage
