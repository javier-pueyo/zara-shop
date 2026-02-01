import styles from './knowledge.module.scss';
import React from 'react';

const Knowledge = ({ knowledges }) => {
  return (
    <section className={styles.knowledge} id="knowledge">
      <h2 className={styles['knowledge__title']}>Knowledge</h2>
      <div className={styles['knowledge__list']}> {/* Extends .row in SCSS, so compilation includes row styles. Safe to use just module class if extended correctly. */}
        {knowledges.map((item, index) => {
          return (
            <div className={styles['knowledge__wrapper']} key={`${JSON.stringify(item)}-${index}`}> {/* Extends .col-third */}
              <span className={styles['knowledge__letter']}>
                {item.name.charAt(0)}
              </span>
              <h3 className={styles['knowledge__name']}>{item.name}</h3>
              <ul className={styles['knowledge__sub']}>
                {item.subKnowledges.map((subItem, index) => {
                  return (
                    <li className={styles['knowledge__sub-item']} key={`${subItem}-${index}`}>{subItem}</li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Knowledge;