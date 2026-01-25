import styles from './projects.module.scss';
import React from "react";
import ProjectItem from './ProjectItem';

const Projects = ({ dataCV }) => {
    return (
        <section className={styles.projects} id="projects">
            {
                dataCV.map((item, index) => {
                    return (
                        <ProjectItem item={item} key={`${JSON.stringify(item)}-${index}`} />
                    )
                })
            }
        </section>
    );
};

export default Projects;
