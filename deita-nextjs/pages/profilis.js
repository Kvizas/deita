import React, { useContext, useEffect } from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import ProfileCard from '../components/profile-card/profile-card'
import ProfileData from '../components/profile-data/profile-data'
import { useRouter } from 'next/router'
import { UserContext } from '../contexts/user-context/user-context'

export default function Profilis() {

    const { user, isLoading } = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {

        if (user === undefined && !isLoading) {
            router.push('/prisijungimas')
        }

    }, [user, isLoading, router])

    if (isLoading || (user === undefined && !isLoading)) return null;

    console.log("------------------------------")
    console.log(user);
    console.log("------------------------------")

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
