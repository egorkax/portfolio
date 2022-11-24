import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import ReactTypingEffect from "react-typing-effect";
import photoPrev from '../../assets/image/photoPrev.jpg'

export const Main = () => {
    return (
        <div id='main'>
            <div>
                <div className={styleContainer.container}>
                    <div className={s.main}>
                        <div className={s.text}>
                            <div className={s.prof}>
                                <ReactTypingEffect
                                    text={["Front-end developer"]}
                                    //@ts-ignore
                                    cursorRenderer={(cursor: any) => <div>{cursor}</div>}
                                    displayTextRenderer={(text) => {
                                        return (
                                            <div>
                                                {text.split('').map((char, i) => {
                                                    const key = `${i}`;
                                                    return (
                                                        <span
                                                            key={key}
                                                        >{char}</span>
                                                    );
                                                })}
                                            </div>
                                        );
                                    }}
                                />
                            </div>
                            <h1><span>Hi, I'm</span> Egor Kakhnenka</h1>
                            <p> Greetings, I am a front-end
                                developer. Have experience
                                in developing SPA
                                applications using REACT
                                framework. Also have
                                experience in staff
                                management, quality
                                control, technical support,
                                implementation of
                                experiential hardware and
                                software. I have a research
                                interest in Angular and Vue
                                frameworks.
                            </p>
                        </div>
                        <div>
                            <img src={photoPrev}
                                 alt={'main'}
                                 width={'400px'}
                                 height={'540px'}
                                 className={s.photo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}