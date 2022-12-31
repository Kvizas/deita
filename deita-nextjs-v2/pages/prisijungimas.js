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
import Link from 'next/link';
import ButtonSubmit from '../components/button-submit/button-submit';

export default function Prisijungimas() {

    const { login } = useContext(UserContext);

    const submit = fields => {
        login(fields.email, fields.password);
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
                            <Image src={GoogleSVG} alt="Google" /> Prisijungti su Google
                        </div>
                    </Button>

                    <Button transparent={true} onClick={submit}>
                        <div className='flex flex--align-center flex--justify-center' style={{ gap: ".75em" }}>
                            <Image src={FacebookSVG} alt="Facebook" /> Prisijungti su Facebook
                        </div>
                    </Button>

                    <Spacer content="Arba" />

                    <Heading level={2} styleLevel={5}>Prisijungti su el. paštu</Heading>

                    <Form>
                        <Input id={"email"} label={"El. paštas"} placeholder={"vardas@gmail.com"} type="email" />
                        <Input id={"password"} label={"Slaptažodis"} placeholder={"••••••••••••"} type="password" />
                        <div className='flex flex--justify-space-between'>
                            <Checkbox id={"rememberMe"}>Prisiminti mane</Checkbox>
                            <Link style={{ margin: "14px 0", textDecoration: 'none' }} href={'slaptazodzio-atkurimas'}>Pamiršau slaptažodį</Link>
                        </div>
                        <ButtonSubmit style={{ width: "100%" }} onSubmit={submit}>Prisijungti</ButtonSubmit>
                    </Form>

                </AuthBox>
            </section>
            <Footer />
        </>
    )
}
