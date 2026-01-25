'use client';
import styles from "./header.module.scss";
import useAnalyticsEventTracker from "../../utilities/ga";
import cn from "classnames";

const Header = ({ info, className }) => {
  const gaEventTracker = useAnalyticsEventTracker("Header");

  const { logoUrl, email, linkedin, gitlab } = info;
  return (
    <header className={cn(styles.header, className)}>
      <div className={`container ${styles.container}`}>
        <a href="/">
          <img
            width="180"
            className={styles.logotipo}
            src={logoUrl}
            alt="logotipo pueyomir"
          />
        </a>
        <section className={styles['social-media']}>
          <a
            onClick={() => gaEventTracker(`LinkedIn`)}
            className={styles['social-media__link']}
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa-brands fa-linkedin-in"></span>
          </a>
          <a
            onClick={() => gaEventTracker(`Email`)}
            className={styles['social-media__link']}
            href={`mailto:${email}`}
          >
            <span className="fa-solid fa-at"></span>
          </a>
          <a
            onClick={() => gaEventTracker(`Gitlab`)}
            className={styles['social-media__link']}
            href={gitlab}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa-brands fa-gitlab"></span>
          </a>
        </section>
      </div>
    </header>
  );
};

export default Header;
