'use client';
import styles from './projects.module.scss';
import React from 'react';
import useAnalyticsEventTracker from '../../utilities/ga';

const ProjectItem = ({ item }) => {
    const gaEventTracker = useAnalyticsEventTracker('Projects');

    return (
        <article className={`${styles['projects__item']} row`}>
            <div className={`projects__header col-half`}>
                <a href={item.urlProject}>
                    <img width="300" className={styles['projects__image']} src={item.image.url} alt={item.image.name} />
                </a>
            </div>
            <div className={`${styles['projects__body']} col-half`}>
                <h2 className={styles['projects__title']}>{item.title}</h2>
                <p className={styles['projects__excerpt']}>{item.description}</p>
                <div className={styles['projects__footer']}>
                    <div className={styles['projects__skills']}>
                        {
                            item.skills.map((skill, index) => {
                                return (
                                    <span key={`${skill}-${index}`}>{skill}</span>
                                )
                            })
                        }
                    </div>
                    {item.urlProject && <a className={`btn btn--primary ${styles['projects__ctaProject']}`} onClick={() => gaEventTracker(`${item.title}: Project`)} href={item.urlProject} target="_blank" rel="noreferrer">See project</a>}
                    {item.urlRepo && <a className="btn btn--primary" onClick={() => gaEventTracker(`${item.title}: Repo`)} href={item.urlRepo} target="_blank" rel="noreferrer">See repository</a>}
                </div>
            </div>
        </article>
    );
};

export default ProjectItem;
