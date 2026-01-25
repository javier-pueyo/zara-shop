'use client';
import styles from './footer.module.scss';
import React from 'react';
import cn from 'classnames';
import useAnalyticsEventTracker from '../../utilities/ga';

const Footer = ({ info, className }) => {
  const gaEventTracker = useAnalyticsEventTracker('Footer');
  const { name, email } = info;
  return (
    <footer className={cn(styles.footer, className)}>
      <p>Development & design by {name}</p>
      <a onClick={() => gaEventTracker(`Email`)} href={`mailto:${email}`}>{email}</a>
    </footer>
  );
};

export default Footer;  