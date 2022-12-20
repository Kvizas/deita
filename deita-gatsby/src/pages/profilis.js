import React from 'react'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/navbar'
import ProfileCard from '../components/profile-card/profile-card.jsx'
import ProfileData from '../components/profile-data/profile-data'

export default function Profilis() {
    return (
        <>
            <Navbar></Navbar>
            <section className="flex flex--align_center">
                <ProfileCard></ProfileCard>
                <ProfileData></ProfileData>
            </section>
            <Footer></Footer>
        </>
    )
}
