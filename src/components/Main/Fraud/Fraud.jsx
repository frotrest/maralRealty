import React from 'react';
import styles from './fraud.module.css';
import clsx from 'clsx';
import Container from '../../Container';
import { FaLock, FaHardHat } from 'react-icons/fa';
import { GiPsychicWaves } from 'react-icons/gi';
import CatWithinBag from '@assets/cat.webp';

const Fraud = () => {
  const fraudOptions = [
    {
      Icon: GiPsychicWaves,
      title: 'Шумные соседи,',
      description: 'устраивающие тусовки каждый день, пока вы пытаетесь уснуть',
    },
    {
      Icon: FaLock,
      title: 'Отсутстиве какой-либо безопасности,',
      description: 'воровство и абсолютная растерянность из-за бытовых вопросов',
    },
    {
      Icon: FaHardHat,
      title: 'Недобросовестные застройщики,',
      description: 'берут ваши деньги и забивают на строительство',
    },
  ];
  return (
    <section className={clsx(styles.fraud)}>
      <Container className={clsx(styles.fraudContent)} dataAnimate="fadeIn">
        <h2 className={clsx(styles.fraudContentTitle)}>
          Покупая дешевую недвижимость вы разрушаете картину своей мечты и получаете «кота в мешке»
        </h2>
        <div className={clsx(styles.crucialContent)}>
          <div className={clsx(styles.problemsList)}>
            {fraudOptions.map((item, index) => (
              <div key={index} className={clsx(styles.problemItem)}>
                <div className={clsx(styles.iconBox)}>
                  <span className={clsx(styles.crossBadge)}>✕</span>
                  <item.Icon size={25} color="white" />
                </div>
                <p className={clsx(styles.problemText)}>
                  <strong>{item.title}</strong> {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Fraud;
