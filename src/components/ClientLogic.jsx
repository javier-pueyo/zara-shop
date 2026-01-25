'use client';
import { useEffect } from 'react';

const ClientLogic = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Animate only once
                }
            });
        }, observerOptions);

        // Select all h2s
        const headings = document.querySelectorAll('h2');
        headings.forEach(h2 => observer.observe(h2));

        return () => observer.disconnect();
    }, []);

    return null; // Logic only
};

export default ClientLogic;
