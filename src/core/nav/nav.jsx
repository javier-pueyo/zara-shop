'use client';
import styles from './nav.module.scss';
import React, { useState } from 'react';
import cn from 'classnames';

const fragmentMenuItem = (item) => {
  const [firstLetter, secondLetter, ...restletters] = item;
  const twoLetters = firstLetter + secondLetter;
  return (
    <>
      <span className={styles['navbar__letter']}>{twoLetters}</span><span className={styles['navbar__word']}>{restletters.join('')}</span>
    </>
  )
}
const Nav = ({ navMenu, className }) => {

  const changeButtonMenu = (event) => {
    const buttonMenu$$ = event.currentTarget;
    const collapsed = buttonMenu$$.getAttribute('aria-expanded');
    if (collapsed === 'false') {
      buttonMenu$$.setAttribute('aria-expanded', true);
    } else {
      buttonMenu$$.setAttribute('aria-expanded', false);
    }
    return collapsed;
  }

  const [buttonClicked, setbuttonClicked] = useState(false);

  const collapseNavBar = (collapsed) => {
    if (collapsed === 'false') {
      setbuttonClicked(true);
    } else {
      setbuttonClicked(false);
    }
  }

  const collapseMenu = (event) => {
    const collapsed = changeButtonMenu(event);
    collapseNavBar(collapsed);
  }

  return (
    <section className={cn(className, `${styles['header-nav']}`, { [styles.collapse]: buttonClicked })}>
      <div className={`container ${styles.container}`}>
        <button onClick={collapseMenu} className={styles.buttonMegaMenu} title="open menú" aria-expanded="false">
          <span className={`${styles.line} ${styles['line--top']}`}></span>
          <span className={`${styles.line} ${styles['line--middle']}`}></span>
          <span className={`${styles.line} ${styles['line--bottom']}`}></span>
        </button>
        <nav className={styles.navbar} aria-label="primary">
          <ul className={styles['navbar__list']}>
            {navMenu.map((item, index) => {
              return (
                <li className={styles['navbar__item']} key={`${JSON.stringify(item)}-${index}`}>
                  <a className={styles['navbar__link']} href={item.url} title={item.name}>{fragmentMenuItem(item.name)}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Nav;  