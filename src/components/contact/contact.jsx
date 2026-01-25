'use client';
import styles from './contact.module.scss';
import React, { useState } from 'react';
import useAnalyticsEventTracker from '../../utilities/ga';

const INITIAL_STATE = {
    name: '',
    email: '',
    message: '',
    phone: '', // Honeypot field
    termsx: false
}
const Contact = ({ contact }) => {
    const gaEventTracker = useAnalyticsEventTracker('Contact');
    const { title, subtitle } = contact;
    const [contactForm, setContactForm] = useState(INITIAL_STATE);
    const [errors, setErrors] = useState({});

    const changeInput = (ev) => {
        const { name, value, checked, type } = ev.target;

        setContactForm({
            ...contactForm,
            [name]: type === 'checkbox' ? checked : value
        })

        // Clear error when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: false
            })
        }
    }

    const submitForm = async (ev) => {
        ev.preventDefault();

        const { email, message, termsx } = contactForm;

        // Validation logic
        const newErrors = {};
        if (!email) newErrors.email = true;
        if (!message) newErrors.message = true;
        if (!termsx) newErrors.termsx = true; // Checkbox required

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return; // Stop submission
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactForm),
            });

            if (response.ok) {
                console.log('Email sent successfully');
                gaEventTracker(`Email sended`);
                setContactForm(INITIAL_STATE);
                setErrors({}); // Clear errors
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending form:', error);
        }
    }

    return (
        <section className={styles.contact} id="contact">
            <div className={styles['contact__intro']}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            <form onSubmit={submitForm}>
                <label className={styles['contact__wrapper']}>
                    <input
                        id="name"
                        aria-label="Name"
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={changeInput}
                        placeholder="Name"
                    />
                </label>
                <label className={styles['contact__wrapper']}>
                    <input
                        id="email"
                        aria-label="Email"
                        className={errors.email ? styles.error : ''}
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={changeInput}
                        placeholder="Email"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <span id="email-error" role="alert" className={styles.errorMessage}>Required</span>}
                </label>
                <label className={styles['contact__wrapper']}>
                    <textarea
                        id="message"
                        aria-label="Message"
                        className={errors.message ? styles.error : ''}
                        name="message"
                        value={contactForm.message}
                        onChange={changeInput}
                        placeholder="Message"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                    ></textarea>
                    {errors.message && <span id="message-error" role="alert" className={styles.errorMessage}>Required</span>}
                </label>
                <label className={styles['contact__wrapper']} style={{ display: 'none' }} aria-hidden="true">
                    <input
                        type="text"
                        name="phone"
                        value={contactForm.phone}
                        onChange={changeInput}
                        tabIndex="-1"
                        autoComplete="off"
                    />
                </label>
                <div className="row">
                    <div className={`${styles['checkbox']} col`}>
                        <input className={`${styles['checkbox__input']} ${contactForm.termsx ? styles.checked : ''} ${errors.termsx ? styles.error : ''}`}
                            type="checkbox"
                            name="termsx"
                            id="termsx"
                            checked={contactForm.termsx}
                            onChange={changeInput}
                            required
                            aria-invalid={!!errors.termsx}
                        />
                        <label className={`${styles['checkbox__label']} ${errors.termsx ? styles.errorMessage : ''}`} htmlFor="termsx">I have read and accepted <a href="#a" target="_blank" rel="noopener noreferrer">the privacy policies</a> of the website.</label>
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