import React from 'react';
import s from './TitleCard.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import photoNav from '../../assets/image/photoNav.jpg'


export const TitleCard = () => {

  return (
    <div className={s.titleCard}>
      <img className={s.photo}
           alt={'ava'}
           src={photoNav}
           width={'180px'}
           height={'180px'}/>
      <span className={s.name}>Egor Kakhnenka</span>
      <span className={s.prof}>Front-end developer</span>
      <div className={s.iconsBlock}>
        <a href="https://github.com/egorkax"><FontAwesomeIcon className={s.icons} icon={faGithub}/></a>
        <a href="https://linkedin.com/in/egor-kakhnenka-a9a659259"><FontAwesomeIcon className={s.icons}
                                                                   icon={faLinkedin}/></a>
        <a href="https://t.me/kahegor"><FontAwesomeIcon className={s.icons} icon={faTelegram}/></a>
      </div>

    </div>
  )
}