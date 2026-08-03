import React from 'react';
import styles from './introduction.module.css';
import clsx from 'clsx';
import Container from '../../Container';
import { IoIosStar } from 'react-icons/io';

const Introduction = () => {
  const accommodationBenefits = [
    'Лицензированный оценщик',
    'Количество сделок свыше 100 до 800.000$',
    'Опыт работы с 2005 года с зарубежной недвижимостью',
  ];
  return (
    <section className={clsx(styles.introduction)}>
      <Container className={clsx(styles.introductionContent)} dataAnimate="fadeInLeft">
        <div className={clsx(styles.quoteBlock)}>
          <h2 className={clsx(styles.introductionContentTitle)}>Морал Realty</h2>
          <span className={clsx(styles.introductionAccommodation)}>Эксперт по недвижимости</span>
          <p className={clsx(styles.quoteText)}>
            Приветствую, меня зовут Марал Кинаят и я точно знаю, что каждый мой клиент покупает не
            недвижимость, в первую очередь, он приобретает{' '}
            <strong className={clsx(styles.highlight)}>комфорт для себя и своих близких</strong>
          </p>
          <ul className={clsx(styles.accommodationBenefits)}>
            {accommodationBenefits.map((item, index) => (
              <li className={clsx(styles.accommodationBenefit)} key={index}>
                <IoIosStar className={clsx(styles.starIcon)} size={15} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Introduction;
