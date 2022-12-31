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
import { useRef } from 'react';
import Image from 'next/image';
import Spacer from '../components/spacer/spacer';
import Input from '../components/input/input';
import Form from '../components/form/form';
import Checkbox from '../components/checkbox/checkbox';

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
                    <Heading level={1} styleLevel={4}>Prisijungimas</Heading>
                    <p>Prisijunkite norėdami pasiekti tik jūsų paskyrai prieinamą medžiagą</p>

                    <Button transparent={true} onClick={submit}>
                        <div className='flex flex--align-center flex--justify-center' style={{ gap: ".75em" }}>
                            <Image src={GoogleSVG} /> Prisijungti su Google
                        </div>
                    </Button>

                    <Button transparent={true} onClick={submit}>
                        <div className='flex flex--align-center flex--justify-center' style={{ gap: ".75em" }}>
                            <Image src={FacebookSVG} /> Prisijungti su Facebook
                        </div>
                    </Button>

                    <Spacer content="Arba" />

                    <Heading level={2} styleLevel={5}>Prisijungti su el. paštu</Heading>

                    <Form>
                        <Input label={"El. paštas"} placeholder={"vardas@gmail.com"} type="email" />
                        <Input label={"Slaptažodis"} placeholder={"••••••••••••"} type="password" />
                        <Checkbox>Prisiminti mane</Checkbox>
                    </Form>

                    <Button onClick={submit}>Prisijungti</Button>
                </AuthBox>
            </section>
            <Footer />
        </>
    )
}
