import React from 'react';
import styles from './generalPartner.module.css';
import clsx from 'clsx';
import Container from '../../Container';

const GeneralPartner = () => {
  return (
    <section className={clsx(styles.generalPartner)}>
      <Container className={clsx(styles.generalPartnerContent)} dataAnimate="fadeInUp">
        <h2 className={clsx(styles.generalPartnerContentMainTitle)}>
          Генеральный партнер компании работает на рынке недвижимости
        </h2>
        <h5 className={clsx(styles.generalPartnerContentExtraTitle)}>
          с 1974 года, с самого основания Кипра
        </h5>
      </Container>
    </section>
  );
};

export default GeneralPartner;
