import React from 'react';
import styles from './header.module.css';
import clsx from 'clsx';
import Container from '../Container';
import Logo from '@assets/logo.webp';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

const Header = ({ children }) => {
  return (
    <header className={clsx(styles.header)}>
      <Container className={clsx(styles.headerContent)} dataAnimate="fadeIn">
        <img src={Logo} alt="logo" className={clsx(styles.headerContentLogo)} />
        <div className={clsx(styles.contactBlock)}>
          <a href="tel:+905338512289" className={clsx(styles.contactBlockItem)}>
            +90 (533) 851-22-89
          </a>
          <div className={clsx(styles.networks)}>
            <div className={clsx(styles.network)}>
              <FaWhatsapp size={25} color="white" />
            </div>
            <div className={clsx(styles.network)}>
              <FaTelegram size={25} color="white" />
            </div>
          </div>
        </div>
      </Container>
      {children}
    </header>
  );
};

export default Header;
