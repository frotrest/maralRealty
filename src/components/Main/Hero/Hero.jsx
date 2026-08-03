import React from 'react';
import styles from './hero.module.css';
import clsx from 'clsx';
import Container from '../../Container';

const Hero = () => {
  return (
    <section className={clsx(styles.hero)}>
      <Container className={clsx(styles.heroContent)} dataAnimate="fadeIn">
        <div className={clsx(styles.heroCore)}>
          <h1 className={clsx(styles.heroCoreTitle)}>Подберем апартаменты на северном кипре</h1>
          <h5 className={clsx(styles.heroCorePodTitle)}>или построим по вашему проекту</h5>
        </div>
        <div className={clsx(styles.heroExtra)}>
          <p className={clsx(styles.heroExtraItem)}>
            Все расходы по проживанию наших гостей во время тура мы берем на себя
          </p>
          <button className={clsx(styles.heroExtraBtn)}>Записаться на тур</button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
