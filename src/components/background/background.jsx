'use client';
import styles from './background.module.scss';
import { useEffect, useState } from 'react';

const Background = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setOffset(window.scrollY);
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.background}>
            <div style={{ transform: `translateY(-${offset * 0.1}px)`, transition: 'transform 0.1s ease-out' }}>
                <div className={styles['background__blob']}></div>
                <div className={styles['background__blob']}></div>
                <div className={styles['background__blob']}></div>
            </div>
        </div>
    );
};

export default Background;
