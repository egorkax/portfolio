import React from "react";
import s from './Work.module.scss'


type WorkPropsType = {
  title: string
  poster: string
  desc: string
  links: string
}
export const Work = (props: WorkPropsType) => {
  return (<li className={s.cards__item}>
      <div className={s.card}>
        <img className={s.card__image} src={props.poster} alt={'poster'}/>
        <div className={s.card__content}>
          <div className={s.card__title}>{props.title}</div>
          <p className={s.card__text}>{props.desc}</p>
          <div className={s.buttonsWrap}>
            <a href={props.links}>
              <button>Git</button>
            </a>
          </div>
        </div>
      </div>
    </li>

  )
}