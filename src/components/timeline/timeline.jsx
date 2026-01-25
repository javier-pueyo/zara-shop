import styles from './timeline.module.scss';
import React from 'react';

const Timeline = ({ dataCV, title }) => {
  return (
    <section className={styles.timeline} id={title === 'Education' ? 'education' : 'experience'}>
      <h2 className={styles['timeline__title']}>{title}</h2>
      <div className={styles['timeline__wrapper']}>
        <ul className={styles['timeline__list']}>
          {
            dataCV.map((item, index) => {
              return (
                <li className={styles['timeline__item']} key={`${JSON.stringify(item)}-${index}`}>
                  <div className={styles['timeline__wrapper-image']}>
                    <img width="60" className={styles['timeline__logo']} src={item.logo} alt="logo" />
                  </div>
                  <div className={styles['timeline__content']}>
                    <p className={styles['timeline__date']}>{item.date}</p>
                    <p className={styles['timeline__entity']}>{item.entity}</p>
                    <p className={styles['timeline__specialty']}>{item.specialty}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  );
};

export default Timeline;