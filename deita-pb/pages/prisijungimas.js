import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import AuthBox from '../components/auth-box/auth-box'
import Heading from '../components/heading/heading';
import Button from '../components/button/button';

import { useContext } from 'react';
import { UserContext } from '../contexts/user-context/user-context';
import { useRef } from 'react';

export default function Prisijungimas() {

    const { login } = useContext(UserContext);

    const emailRef = useRef();
    const passwordRef = useRef();


    const submit = () => {

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        login(email, password);
    }

    return (
        <>
            <Navbar />
            <section>
                <AuthBox>
                    <Heading level={1} styleLevel={3} margin={false}>Prisijungimas</Heading>
                    <p>Prisijunkite norėdami pasiekti tik jūsų paskyrai prieinamą medžiagą</p>
                    <form className='form'>
                        <input ref={emailRef} placeholder='El. paštas' type={"email"}></input>
                        <input ref={passwordRef} placeholder='Slaptažodis' type={"password"}></input>
                    </form>
                    <div className='row'>
                        <Button onClick={submit}>Prisijungti</Button>
                    </div>
                </AuthBox>
            </section>
            <Footer />
        </>
    )
}
