import React from 'react';
import s from './Header.module.scss'
import {Nav} from "./nav/Nav";
import {TitleCard} from "./title-card/TitleCard";

export const Header = () => {

  return (
    <div className={s.header}>
      <TitleCard/>
      <Nav/>
    </div>

  )
}