import React from 'react'
import ContextualSection from '../components/contextual-section/contextual-section'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import Navbar from '../components/navbar/navbar'
import Pill from '../components/pill-navigation/pill'
import PillNavigation from '../components/pill-navigation/pill-navigation'
import SelectionLine from '../components/pill-navigation/pill-navigation'
import PlanSelection from '../components/subscription-selection/subscription-selection'

export default function Prenumeratos() {
    return (
        <>
            <Navbar />
            <ContextualSection style={{ textAlign: "center" }}>
                <div className='flex flex--justify-center'>
                    <Heading className='w--100' level={1} styleLevel={3}>Prenumeratos</Heading>
                    <p style={{ width: "min(800px, calc(100vw - 40px))" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>

                    <PillNavigation style={{ marginTop: "32px" }}>
                        <Pill defaultActive={true}>Metinis planas</Pill>
                        <Pill>6 mėnesių planas</Pill>
                        <Pill>3 mėnesių planas</Pill>
                        <Pill>Mėnesinis planas</Pill>
                    </PillNavigation>

                    <PlanSelection style={{ marginTop: "50px" }}>

                    </PlanSelection>
                </div>
            </ContextualSection>
            <Footer />
        </>
    )
}
