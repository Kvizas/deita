import React from 'react'

import Heading from '../heading/heading';

import "./profile-data.sass";

export default function ProfileData() {
  return (
    <div className='profile-data'>
        <Heading className="profile-data__title" style={{marginBottom: "0"}} styleLevel={4} level={3}>
            Paskyros nustatymai
        </Heading>

        <div>Test</div>
    </div>
  )
}
