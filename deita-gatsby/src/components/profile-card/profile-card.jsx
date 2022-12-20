import React from 'react'
import { useContext } from 'react';
import Heading from '../heading/heading';
import { UserContext } from '../../contexts/user-context/user-context';
import Subtext from '../subtext/subtext';

import "./profile-card.sass";

export default function ProfileCard() {

  const {user, isLoading} = useContext(UserContext);

  console.log(user);

  if (isLoading) return (
    <div className='profile-card'></div>
  );

  return (
    <div className='profile-card'>
        <div className='profile-card__img' style={{backgroundImage: `url(${user.profilePicture})`}}></div>
        <Heading style={{textAlign: "center", marginBottom: "0"}} styleLevel={5} level={3}>{user.username}</Heading>
        <Subtext style={{textAlign: "center", marginTop: "0px"}}>{user.email}</Subtext>
        <div className="profile-card__role profile-card__role--free">{user.role} narystė</div>
    </div>
  )
}
