import styles from './about-us.module.scss';
import React from 'react';

const AboutUs = ({ aboutUs }) => {
  const { description, image } = aboutUs;
  return (
    <section className={styles['about-us']} id="aboutMe">
      <div className="row">
        <div className={`col-half ${styles['about-us__img']}`}>
          <img width="500" src={image.url} alt={image.name} />
        </div>
        <div className={`col-half ${styles['about-us__text']}`}>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;