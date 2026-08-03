import React from 'react';
import styles from './desire.module.css';
import Woman from '@assets/woman.webp';
import Container from '../../Container';
import clsx from 'clsx';

const BENEFITS = {
  left: [
    {
      id: 1,
      text: 'Первая береговая линия, море в шаговой доступности,',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
          <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
          <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        </svg>
      ),
    },
    {
      id: 2,
      text: 'Раскошная и просторная вилла с личным бассейном',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
  ],
  right: [
    {
      id: 3,
      text: 'Развлечения: бутики, магазины неподалеку',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
    },
    {
      id: 4,
      text: 'Чистота и спокойствие: без шума и трафика',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ),
    },
  ],
};

export const DesireSection = () => {
  return (
    <section className={clsx(styles.desire)}>
      <Container dataAnimate="fadeIn">
        <div className={clsx(styles.headerDesire)}>
          <h5 className={clsx(styles.headerDesireSubTitle)}>Признавайтесь,</h5>
          <h2 className={clsx(styles.headerDesireTitle)}>
            Каждый состоявшийся и самодостаточный человек мечтает иметь свой уютный домик где-нибудь
            в курортном городе..
          </h2>
        </div>
        <div className={clsx(styles.desireBody)}>
          <div className={clsx(styles.column)}>
            {BENEFITS.left.map((item) => (
              <div key={item.id} className={clsx(styles.card)}>
                <div className={clsx(styles.iconBox)}>
                  {item.icon}
                  <span className={clsx(styles.badge)}>✓</span>
                </div>
                <p className={clsx(styles.cardText)}>{item.text}</p>
              </div>
            ))}
          </div>
          <div className={clsx(styles.desireHero)}>
            <img
              src={Woman}
              alt="woman-dreams"
              loading="lazy"
              className={clsx(styles.desireHeroImg)}
            />
          </div>
          <div className={clsx(styles.column)}>
            {BENEFITS.right.map((item) => (
              <div key={item.id} className={clsx(styles.card)}>
                <div className={clsx(styles.iconBox)}>
                  {item.icon}
                  <span className={clsx(styles.badge)}>✓</span>
                </div>
                <p className={clsx(styles.cardText)}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DesireSection;
