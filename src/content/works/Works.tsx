import React from 'react';
import s from './Works.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import {Work} from "./work/Work";
import todosImg from '../../assets/image/todo.jpg'
import socialNwiImg from '../../assets/image/social-nW.jpg'


export const Works = () => {
    let todosDesc = 'Stack: React/Redux/Redux-Toolkit/Storybook/Axios \n' +
        'React-router-dom v6/ Jest(Unit-Tests) /Formik/\n' +
        'Todolist app created with react hooks, routing and\n' +
        'redirects,material UI, REST api request/response flow, \n' +
        'unit-tests and etc'
    let socialDesc = 'Stack: React/Redux/TypeScript/Redux/Thunk/React-router-dom \n' +
        'v6/Formik/ Axios/ Jest.\n' +
        ' Social network app using class components, react hooks, routing,working with\n' +
        'REST api, login/logout flow, pagination, form and validation/file \n' +
        'uploading using unit- tests for code workability check'
    let todosLinks = 'https://github.com/egorkax/Todolist'
    let samuraiLinks = 'https://github.com/egorkax/social-network'
    return (
        <div id='works'>
            <div className={s.worksBlock}>
                <div className={styleContainer.container}>
                    <div className={s.worksContainer}>
                        <h2 className={s.title}>My works</h2>
                        <ul className={s.cards}>
                            <Work title={'Todolist'} poster={todosImg} desc={todosDesc} links={todosLinks}/>
                            <Work title={'Social-network'} poster={socialNwiImg} desc={socialDesc}
                                  links={samuraiLinks}/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}