import React from 'react';
import s from './Skill.module.scss'

type SkillType = {
    icon: string
    title: string
    color?: string
}
export const Skill = (props: SkillType) => {

    return (
        <div className={s.skill}>
            <div className={s.skillImg}>
                <img className={s.icon} src={props.icon} alt="" color={props.color}/>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>
        Lorem ipsum dolor sit amet, consectetur
        adipisicing elit Lorem ipsum dolor sit amet, co
      </span>
        </div>
    )
}