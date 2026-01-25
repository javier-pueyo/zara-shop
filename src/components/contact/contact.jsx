'use client';
import styles from './contact.module.scss';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import useAnalyticsEventTracker from '../../utilities/ga';

const INITIAL_STATE = {
    name: '',
    email: '',
    message: '',
    termsx: false

}
const Contact = ({ contact }) => {
    const gaEventTracker = useAnalyticsEventTracker('Contact');
    const { title, subtitle } = contact;
    const [contactForm, setContactForm] = useState(INITIAL_STATE);


    const changeInput = (ev) => {
        const { name, value, checked, type } = ev.target;

        setContactForm({
            ...contactForm,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const submitForm = (ev) => {
        ev.preventDefault();

        const { name, email, message, termsx } = contactForm;
        /* console.log('contactForm', contactForm); */

        if (name && email && message && termsx) {

            // service_id, template_id, template_params, user_id
            emailjs.send(
                'service_875880w',
                'template_z0j1s9n',
                contactForm,
                'user_K0UoY4Z0bB1QOqgXg'
            )
                .then((result) => {
                    console.log(result.text);
                    gaEventTracker(`Email sended`);
                    setContactForm(INITIAL_STATE);
                }, (error) => {
                    console.log(error.text);
                });
        }
    }

    return (
        <section className={styles.contact} id="contact">
            <div className={styles['contact__intro']}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            <form onSubmit={submitForm}>
                <label>
                    <input type="text" name="name" value={contactForm.name} onChange={changeInput} placeholder="Name" />
                </label>
                <label>
                    <input type="email" name="email" value={contactForm.email} onChange={changeInput} placeholder="Email" />
                </label>
                <label>
                    <textarea name="message" value={contactForm.message} onChange={changeInput} placeholder="Message"></textarea>
                </label>
                <div className="row">
                    <div className="checkbox col">
                        <input className={`${styles['checkbox__input']} ${contactForm.termsx ? styles.checked : ''}`}
                            type="checkbox"
                            name="termsx"
                            id="termsx"
                            checked={contactForm.termsx}
                            onChange={changeInput}
                            required
                        />
                        <label className={styles['checkbox__label']} htmlFor="termsx">I have read and accepted <a href="#a" target="_blank" rel="noopener noreferrer">the privacy policies</a> of the website.</label>
                    </div>
                    <div className="col m-l-auto">
                        <button className="btn btn--primary" type="submit">Send message !</button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Contact;