import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser'
import {useFormik} from "formik";


export const Contacts = () => {

  const formik = useFormik({
    initialValues: {
      from_name: '',
      message: '',
      email: '',
    },
    validate: (values) => {
      const errors: Error = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      return errors
    },
    onSubmit: values => {
      emailjs.send('service_t6nuy3m', 'template_1ye2pej', values, 'KHgY632Twjasv3PLe')
        .then((response) => {
          alert(`SUCCESS! ${response.status} ${response.text}`)
        }, (err) => {
          alert(`FAILED! ${err}`)
        })
    },
  })
  return (
    <div id='contacts'>
      <div className={styleContainer.container}>
        <h2 className={s.title}>You can write to me!</h2>
        <div className={s.contacts}>
          <form className={s.form} onSubmit={formik.handleSubmit}>
            <h2>MESSAGE FORM</h2>
            <p>
              <input type={"text"}
                     placeholder="Write your name here.."
                     id="from_name"
                     name="from_name"
                     onChange={formik.handleChange}
                     value={formik.values.from_name}
                     onBlur={formik.handleBlur}/>
            </p>
            <p>
                <textarea
                  className={s.text}
                  placeholder="What would you like to tell me.."
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  onBlur={formik.handleBlur}></textarea>
            </p>
            <p>
              <input type={'email'}
                     placeholder="Email for feedback.."
                     id="email"
                     name="email"
                     onChange={formik.handleChange}
                     value={formik.values.email}
                     onBlur={formik.handleBlur}/>
            </p>
            <button type='submit'>Send Message</button>
            <div>
              <span><FontAwesomeIcon className={s.icons} icon={faPhone}/></span>+375298493804
              <span><FontAwesomeIcon className={s.icons} icon={faEnvelope}/></span>kax.egor@mail.ru
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

//types
type Error = {
  email?: string
  from_name?: string
  message?: string
}