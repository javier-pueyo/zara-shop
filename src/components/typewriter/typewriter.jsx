'use client';
import { useState, useEffect } from 'react';
import styles from './typewriter.module.scss';

const Typewriter = ({ text, delay = 50, tag: Tag = 'span' }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        // Si no hay texto, no hacemos nada para evitar errores
        if (!text) return;

        setDisplayedText(''); // Limpiamos al inicio
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            // Avanzamos el índice
            currentIndex++;

            // SOLUCIÓN: Usamos slice en lugar de acceder al array por índice.
            // text.slice(0, 1) devuelve la primera letra.
            // text.slice(0, 100) devuelve el texto completo (no da error).
            setDisplayedText(text.slice(0, currentIndex));

            // Si hemos llegado al final, paramos
            if (currentIndex >= text.length) {
                clearInterval(intervalId);
            }
        }, delay);

        return () => clearInterval(intervalId);
    }, [text, delay]);

    return (
        <Tag className={styles.wrapper}>
            <span className={styles.srOnly}>{text}</span>
            <span aria-hidden="true" className={styles.visualText}>
                {displayedText}
            </span>
        </Tag>
    );
};

export default Typewriter;
