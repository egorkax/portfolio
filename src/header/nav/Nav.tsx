import React, {useState} from 'react';
import s from './Nav.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight";

export const Nav = () => {

  const values = [
    {id: 1, text: "About me", link: '#main'},
    {id: 2, text: "Skills", link: '#skills'},
    {id: 3, text: "Works", link: '#works'},
    {id: 4, text: "Contacts", link: '#contacts'}
  ]

  const [activeId, setActiveId] = useState(1);

  return (
    <div className={s.nav}>
      <ul>
        {values.map((val) => (
          <li onClick={() => setActiveId(val.id)} key={val.id}>
            <a href={val.link} className={activeId === val.id ? 'Active' : "Inactive"}>
              {val.text} <FontAwesomeIcon
              icon={faChevronRight}/>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}








