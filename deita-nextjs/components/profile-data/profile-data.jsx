import React from 'react'

import Heading from '../heading/heading';

import sass from "./profile-data.module.sass";

export default function ProfileData() {
  return (
    <div className={sass.profileData}>
        <Heading className={sass.profileData__title} style={{marginBottom: "0"}} styleLevel={4} level={3}>
            Paskyros nustatymai
        </Heading>

        <div>Test</div>
    </div>
  )
}
