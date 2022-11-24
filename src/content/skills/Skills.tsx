import React from 'react';
import styleContainer from "../../common/styles/Container.module.css";
import s from './Skills.module.scss'
import api from '../../assets/image/icons/api.png'
import react from '../../assets/image/icons/react2.png'
import redux from '../../assets/image/icons/redux2.png'
import ts from '../../assets/image/icons/ts.png'
import axios from '../../assets/image/icons/axios.png'
import storybook from '../../assets/image/icons/storybook.png'
import postman from '../../assets/image/icons/postman-icon.png'
import js from '../../assets/image/icons/js2.png'
import material from '../../assets/image/icons/material.png'
import {Skill} from "./skill/Skill";

export const Skills = () => {

    return (
        <div id='skills' className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'Rest API'} icon={api}/>
                    <Skill title={'React'} icon={react}/>
                    <Skill title={'Redux'} icon={redux}/>
                    <Skill title={'Typescript'} icon={ts}/>
                    <Skill title={'JS'} icon={js}/>
                    <Skill title={'Axios'} icon={axios}/>
                    <Skill title={'Storybook'} icon={storybook}/>
                    <Skill title={'Postman'} icon={postman}/>
                    <Skill title={'Material'} icon={material}/>
                </div>
            </div>
        </div>
    )
}