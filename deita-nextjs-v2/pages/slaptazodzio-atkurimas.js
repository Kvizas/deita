import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import AuthBox from '../components/auth-box/auth-box'
import Heading from '../components/heading/heading';
import Button from '../components/button/button';

import GoogleSVG from "../images/google_colored.svg"
import FacebookSVG from "../images/facebook_colored.svg"

import { useContext } from 'react';
import { UserContext } from '../contexts/user-context/user-context';

import Image from 'next/image';
import Spacer from '../components/spacer/spacer';
import Input from '../components/input/input';
import Form from '../components/form/form';
import Checkbox from '../components/checkbox/checkbox';
import Link from 'next/link';
import ButtonSubmit from '../components/button-submit/button-submit';

export default function SlaptazodzioAtkurimas() {

    const { login } = useContext(UserContext);

    const submit = fields => {
        login(fields.email, fields.password);
    }

    return (
        <>
            <Navbar />
            <section>
                <AuthBox>
                    <Heading level={1} styleLevel={4}>Slaptažodžio atkūrimas</Heading>
                    <p>Visi mes anksčiau ar vėliau kažką pamirštame.</p>
                    {/* <p>Įveskite savo el. pašto adresą ir, <span style={{ textDecoration: "underline" }}>jeigu paskyra su tokiu el. paštu egzistuoja</span>, jums atsiųsime atkūrimo laišką.</p> */}

                    <Form>
                        <Input id={"email"} label={"El. paštas"} placeholder={"vardas@gmail.com"} type="email" />
                        <ButtonSubmit style={{ width: "100%" }} onSubmit={submit}>Atkurti slaptažodį</ButtonSubmit>
                    </Form>

                </AuthBox>
            </section>
            <Footer />
        </>
    )
}
