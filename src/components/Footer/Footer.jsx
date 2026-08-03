import React from 'react';
import styles from './footer.module.css';
import clsx from 'clsx';
import Container from '../Container';
import FooterLogo from '@assets/footer-logo.webp';

const Footer = () => {
  return (
    <footer className={clsx(styles.footer)}>
      <Container className={clsx(styles.footerContent)} dataAnimate="fadeInUp">
        <a href="#" className={clsx(styles.footerContentPrivacyPolicy)}>
          Политика конфиденциальности Договор оферты
        </a>
        <a href="#">
          <img src={FooterLogo} alt="footer-logo" />
        </a>
        <span className={clsx(styles.footerContentAuthors)}>
          The website was developed by Frotrest
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
