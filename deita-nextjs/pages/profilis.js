import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import ProfileCard from '../components/profile-card/profile-card'
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
