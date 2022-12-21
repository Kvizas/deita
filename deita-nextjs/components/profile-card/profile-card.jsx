import React from 'react'
import { useContext } from 'react';
import Heading from '../heading/heading';
import { UserContext } from '../../contexts/user-context/user-context';
import Subtext from '../subtext/subtext';

import sass from "./profile-card.module.sass";

export default function ProfileCard() {

  const {user, isLoading} = useContext(UserContext);

  console.log(user);

  if (isLoading) return (
    <div className={sass.profileCard}></div>
  );

  let roleColor = undefined;
  if (user.role.name == "Premium") {
    roleColor = "";
  } else if (user.role.name == "Nemokama")
    roleColor = sass.profileCard__role__free
  else {
    roleColor = sass.profileCard__role__guest
  }

  return (
    <div className={sass.profileCard}>
        <div className={sass.profileCard__img} style={{backgroundImage: `url(${user.profilePicture})`}}></div>
        <Heading style={{textAlign: "center", marginBottom: "0"}} styleLevel={5} level={3}>{user.username}</Heading>
        <Subtext style={{textAlign: "center", marginTop: "0px"}}>{user.email}</Subtext>
        <div className={sass.profileCard__role + " " + roleColor}>{user.role.description}</div>
    </div>
  )
}
