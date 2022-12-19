import React from 'react'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/navbar'
import ProfileCard from '../components/profile-card/profile-card.jsx'

export default function Profilis() {
    return (
        <>
            <Navbar></Navbar>
            <section>
                <ProfileCard></ProfileCard>
            </section>
            <Footer></Footer>
        </>
    )
}
