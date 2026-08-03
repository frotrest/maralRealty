import React, { useState } from 'react';
import clsx from 'clsx';
import { FaCheck } from 'react-icons/fa';
import styles from './propertyServicesSection.module.css';
import Container from '../../Container';
import Magazine from '@assets/magazine.webp';

const PROPERTY_ITEMS = [
  {
    id: 1,
    title: 'Городок из вилл',
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Строящийся объект',
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Большой отель',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
  },
];

const PropertyServicesSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправленные данные:', formData);
    setFormData({ name: '', phone: '' });
  };

  return (
    <section className={clsx(styles.sectionInvestment)}>
      <Container className={clsx(styles.sectionInvestmentContent)} dataAnimate="fadeInLeft">
        <div className={clsx(styles.headerGroup)}>
          <h2 className={clsx(styles.mainTitle)}>
            Можем предложить на выбор участки и построить для вас не только виллу
          </h2>
          <p className={clsx(styles.subTitle)}>но и жилой комплекс и даже отель</p>
        </div>
        <div className={clsx(styles.propertyGrid)}>
          {PROPERTY_ITEMS.map((item) => (
            <article key={item.id} className={clsx(styles.propertyCard)}>
              <span className={clsx(styles.cardBadge)}>
                <FaCheck className={clsx(styles.checkIcon)} />
                {item.title}
              </span>
              <img src={item.image} alt={item.title} className={clsx(styles.propertyImage)} />
            </article>
          ))}
        </div>
        <div className={clsx(styles.infoNotice)}>
          <p className={clsx(styles.infoText)}>
            <strong>+ Большой выбор ниш для бизнеса.</strong> Значимый спрос людей, но предложений
            либо очень мало, либо их вовсе нет: это можете быть вы и сразу занять лидирующие позиции
          </p>
        </div>
      </Container>
      <div className={clsx(styles.catalogBlock)}>
        <Container className={clsx(styles.formWrapper)} dataAnimate="fadeInRight">
          <h3 className={clsx(styles.formTitle)}>Не хотите ждать, пока ваш дом достроится?</h3>
          <p className={clsx(styles.formDescription)}>
            Получите каталог со свободными уже <strong>готовыми к заселению</strong> предложениями
          </p>

          <form onSubmit={handleSubmit} className={clsx(styles.catalogForm)}>
            <input
              type="text"
              placeholder="Как к Вам обращаться?"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={clsx(styles.formInput)}
              required
            />
            <input
              type="tel"
              placeholder="Контактный номер телефона"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={clsx(styles.formInput)}
              required
            />
            <button type="submit" className={clsx(styles.submitButton)}>
              Получить PDF-каталог
            </button>
          </form>
        </Container>
      </div>
    </section>
  );
};

export default PropertyServicesSection;
