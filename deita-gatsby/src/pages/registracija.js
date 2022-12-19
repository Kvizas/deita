import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import AuthBox from '../components/auth-box/auth-box'
import Heading from '../components/heading/heading';
import Button from '../components/button/button';
import Checkbox from '../components/checkbox/checkbox';

export default function Registracija() {
    return (
        <>
            <Navbar />
            <section>
                <AuthBox>
                    <Heading level={1} styleLevel={3} margin={false}>Registracija</Heading>
                    <p>Prisiregistruokite norėdami pasiekti tik jūsų paskyrai prieinamą medžiagą</p>
                    <form className='form form--two-col'>
                        <input className='form__item--wide' placeholder='Vardas' type={"name"}></input>
                        <input className='form__item--wide' placeholder='El. paštas' type={"email"}></input>
                        <input placeholder='Slaptažodis' type={"password"}></input>
                        <input placeholder='Pakartokite slaptažodį' type={"password"}></input>
                        <div className='form__item--wide'>
                            <Checkbox id="policy-agreement" onChange={e => console.log(e)}>Sutinku su privatumo politika</Checkbox>
                        </div>
                    </form>
                    <div className='row'>
                        <Button>Toliau</Button>
                    </div>
                </AuthBox>
            </section>
            <Footer />
        </>
    )
}
