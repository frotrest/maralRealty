import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './faq.module.css';
import Container from '../../Container';
import { FiPlus } from 'react-icons/fi';

const faqData = [
  {
    question: 'Можно ли встретиться с Вами в Алматы?',
    answer:
      'Безусловно, консультация с широким активом не оставляет шанса для прогресса профессионального сообщества.',
  },
  {
    question: 'Можно ли оформить услугу в рассрочку или по частям?',
    answer:
      'Да, мы предлагаем гибкие условия оплаты и готовы обсудить индивидуальный график рассрочки под ваш проект.',
  },
  {
    question: "Можно ли поговорить с Вами по Zoom'у?",
    answer:
      'Конечно, консультации проводятся как очно, так и онлайн — выбирайте удобный для вас формат связи.',
  },
  {
    question: 'Как долго будет проходить строительство?',
    answer:
      'Сроки зависят от масштаба проекта, в среднем строительство занимает от 6 до 18 месяцев.',
  },
  {
    question: 'Даете ли вы скидки постоянным клиентам?',
    answer:
      'Безусловно, консультация с широким активом не оставляет шанса для прогресса профессионального сообщества.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(4);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faq}>
      <Container className={styles.faqContent} dataAnimate="fadeInLeft">
        <h2 className={styles.faqTitle}>Часто-задаваемые вопросы:</h2>

        <ul className={styles.faqList}>
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <li key={index} className={clsx(styles.faqItem, isActive && styles.faqItemActive)}>
                <button
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() => handleToggle(index)}
                >
                  <span>{item.question}</span>
                  <FiPlus className={clsx(styles.faqIcon, isActive && styles.faqIconActive)} />
                </button>

                <div
                  className={clsx(styles.faqAnswerWrapper, isActive && styles.faqAnswerWrapperOpen)}
                >
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Faq;
