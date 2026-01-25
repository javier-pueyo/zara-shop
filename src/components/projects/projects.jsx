'use client';
import styles from './projects.module.scss';
import React from "react";
import useAnalyticsEventTracker from "../../utilities/ga";

const Projects = ({ dataCV }) => {
    const gaEventTracker = useAnalyticsEventTracker('Projects');

    return (
        <section className={styles.projects} id="projects">
            {
                dataCV.map((item, index) => {
                    return (
                        <article className={`${styles['projects__item']} row`} key={`${JSON.stringify(item)}-${index}`}>
                            <div className={`projects__header col-half`}> {/* projects__header was not in SCSS, likely global or unstyled? Keeping as string if not found, or maybe it should be styles['projects__header'] if I missed it. Checked SCSS: it was NOT there. Keeping as string for safety/global util? Or removing? Let's assume it might depend on global css or is unstyled structure. */}
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
                                    <a className={`btn btn--primary ${styles['projects__ctaProject']}`} onClick={() => gaEventTracker(`${item.title}: Project`)} href={item.urlProject} target="_blank" rel="noreferrer">See project</a>
                                    <a className="btn btn--primary" onClick={() => gaEventTracker(`${item.title}: Repo`)} href={item.urlRepo} target="_blank" rel="noreferrer">See repository</a>
                                </div>
                            </div>
                        </article>
                    )
                })
            }
        </section>
    );
};

export default Projects;