import * as React from "react"
import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import SearchbarInstant from "../../components/searchbar-instant/searchbar-instant"
import SearchList from "../../components/search-list/search-list"
import Section from "../../components/contextual-section/contextual-section"

import sass from "./index.module.sass";
import { useRouter } from "next/router"

// markup
const SearchPage = () => {

    const router = useRouter();

    const search_query = router.query?.q;

    return (
        <main>
            <Navbar noSearchbar={true} />
            <Section className={sass.search}>
                <div className={sass.search__content}>
                    <SearchbarInstant search_query={search_query} disableList={true}></SearchbarInstant>
                    <h4>DEITA medžiaga</h4>
                    <SearchList></SearchList>
                </div>
                <div className={sass.search__filters}>
                    <p>
                        Paieškoje stenkitės nurodyti tik reikiamus raktažodžius.
                        Daugiau pagalbos kaip tiksliai ieškoti mūsų sistemoje galite rasti sekdami šią nuorodą.
                    </p>
                </div>
            </Section>
            <Footer />
        </main>
    )
}

export default SearchPage
