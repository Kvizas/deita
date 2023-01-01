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

export default function Prisijungimas() {

    const { register } = useContext(UserContext);

    const submit = fields => {
    }

    return (
        <>
            <Navbar />
            <section>
                <AuthBox>
                    <Heading level={1} styleLevel={4}>Registracija</Heading>
                    <p>Susikurkite paskyrą, kad galėtumėte visavertiškai naudotis platforma</p>

                    <Button transparent={true} onClick={submit}>
                        <div className='flex flex--align-center flex--justify-center' style={{ gap: ".75em" }}>
                            <Image src={GoogleSVG} alt="Google" /> Registruotis su Google
                        </div>
                    </Button>

                    <Button transparent={true} onClick={submit}>
                        <div className='flex flex--align-center flex--justify-center' style={{ gap: ".75em" }}>
                            <Image src={FacebookSVG} alt="Facebook" /> Registruotis su Facebook
                        </div>
                    </Button>

                    <Spacer content="Arba" />

                    <Heading level={2} styleLevel={5}>Registruotis su el. paštu</Heading>

                    <Form>
                        <Input id={"name"} label={"Vardas"} placeholder={"Jonas"} />
                        <Input id={"email"} label={"El. paštas"} placeholder={"vardas@gmail.com"} type="email" />
                        <Input id={"password"} label={"Slaptažodis"} placeholder={"••••••••••••"} type="password" />
                        <Input id={"password"} label={"Pakartoti slaptažodį"} placeholder={"••••••••••••"} type="password" />
                        <Checkbox id={"agreeToTerms"} style={{ textAlign: "left" }}>
                            Sutinku su <Link href={'/privatumo-politika'} rel="noopener noreferrer" target="_blank">
                                privatumo politika
                            </Link> ir <Link href={'/naudojimosi-salygos'} rel="noopener noreferrer" target="_blank">
                                naudojimosi sąlygomis
                            </Link>
                        </Checkbox>
                        <ButtonSubmit style={{ width: "100%" }} onSubmit={submit}>Registruotis</ButtonSubmit>
                    </Form>

                </AuthBox>
            </section>
            <Footer />
        </>
    )
}
