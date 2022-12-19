import React from 'react'
import { useContext } from 'react';
import Heading from '../heading/heading';
import { UserContext } from '../../contexts/user-context/user-context';

import "./profile-card.sass";

export default function ProfileCard() {

  const [user] = useContext(UserContext);

  return (
    <div className='profile-card'>
        <div className='profile-card__img'></div>
        <Heading style={{textAlign: "center", marginBottom: "0"}} styleLevel={5} level={3}>{user.username}</Heading>
        <Subtext>{user.email}</Subtext>
    </div>
  )
}
