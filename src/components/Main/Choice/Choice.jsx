import React from 'react';
import clsx from 'clsx';
import styles from './choice.module.css';
import Container from '../../Container';

const CHEAP_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80',
];

const LUXURY_AVATARS = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
];

export const ChoiceSection = () => {
  return (
    <section className={clsx(styles.choiceBlock)}>
      <Container className={clsx(styles.choiceContainer)} dataAnimate="fadeIn">
        <h2 className={clsx(styles.choiceTitle)}>И у каждого человека есть выбор:</h2>
        <div className={clsx(styles.optionGrid)}>
          <article className={clsx(styles.optionCard)}>
            <span className={clsx(styles.optionTagline)}>«Найти как бы подешевле»</span>

            <div className={clsx(styles.propertyPreview)}>
              <span className={clsx(styles.categoryBadge, styles.economyBadge)}>
                Дешевая многоэтажка
              </span>
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80"
                alt="cheap-apartments"
                loading="lazy"
                className={clsx(styles.propertyImage, styles.grayscaleFilter)}
              />
            </div>
            <div className={clsx(styles.tenantAvatars)}>
              {CHEAP_AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`customer-${i}`}
                  loading="lazy"
                  className={clsx(styles.tenantPortrait, styles.grayscalePortrait)}
                />
              ))}
            </div>
            <p className={clsx(styles.optionSummary)}>
              При этом те, кто все-таки выбирают подешевле зачастую жалуются, что у них:
              некачественные строй-материалы, плесень на стенах, отсутствие звукоизоляции, много
              соседей
            </p>
          </article>
          <article className={clsx(styles.optionCard)}>
            <span className={clsx(styles.optionTagline)}>«Забота о себе и комфорт»</span>
            <div className={clsx(styles.propertyPreview)}>
              <span className={clsx(styles.categoryBadge, styles.comfortBadge)}>
                Комфортная вилла
              </span>
              <img
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&auto=format&fit=crop&q=80"
                alt="comfortable-villa"
                loading="lazy"
                className={clsx(styles.propertyImage)}
              />
            </div>
            <div className={clsx(styles.tenantAvatars)}>
              {LUXURY_AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`joyful-customer-${i}`}
                  loading="lazy"
                  className={clsx(styles.tenantPortrait, styles.accentPortrait)}
                />
              ))}
            </div>
            <p className={clsx(styles.optionSummary)}>
              В этом варианте: стройматериалы европейского качества, нет плесени, хорошая
              звукоизоляция, а из людей лишь ваши близкие рядом
            </p>
          </article>
        </div>
        <div className={clsx(styles.summaryNote)}>
          <div className={clsx(styles.alertMarker)}>!</div>
          <p className={clsx(styles.noteMessage)}>
            Ценовой сегмент напрямую влияет на окружение вокруг вас, комфорт и безопасность. Какое
            будущее примете вы? Ответ ясен, как 320 солнечных дней в году на Северном Кипре :)
          </p>
        </div>
      </Container>
    </section>
  );
};
