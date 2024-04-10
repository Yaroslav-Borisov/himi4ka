import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/button/button';
import cn from 'classnames';
import PROGRAM_CARDS from '../content/programCards';
import ProgramCard from '@/components/programCard/programCard';
import Reviews from '@/components/reviews/reviews';
import REVIEWS from '../content/reviews';
import Header from '@/components/header/header';

export default function Book() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={cn(styles.intro, styles.section)}>
          <Image
            className={styles.intro__image}
            src="/intro.svg"
            alt="Intro image"
            width={960}
            height={415}
            priority
          />
          <h1 className={styles.intro__title}>Химия с нуля</h1>
          <h2 className={styles.intro__subtitle}>
            Это самый понятный учебник по химии...
            <br />
            Сильно сказано, не так ли? Скоро убедитесь в этом.
          </h2>
          <Button>Начать обучение</Button>
        </div>
        <div className={cn(styles.history, styles.section)}>
          <h3 className={cn(styles.history__title, styles.section__title)}>
            От полного непонимания к делу всей своей жизни!
            <br />
            Или короткая история создания этого учебника...
          </h3>
          <p className={cn(styles.history__text, styles.section__text)}>
            Когда я учился в школе, химию нам объясняли очень плохо. Первую четверть это вообще
            делал учитель физики... Он просто читал учебник, который итак был написан сложным
            научным языком.
          </p>
          <p className={cn(styles.history__text, styles.section__text)}>
            Много непонятных формул, определений, химических реакций… Голова кругом! Стоило
            пропустить хотя бы один урок, как я сразу же переставал что-либо понимать. Короче
            говоря, химия стала моим самым нелюбимым школьным предметом.
          </p>
          <Image
            className={styles.history__image}
            src="/history.svg"
            alt="history image"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            priority
          />
          <p className={cn(styles.history__text, styles.section__text)}>
            Я смотрел на красивые химические опыты в интернете, слышал о том, как химия делает нашу
            жизнь лучше. И мне было обидно за то, что школьная программа составила такое негативное
            впечатление.
          </p>
          <p className={cn(styles.history__text, styles.section__text)}>
            Поэтому, поступив в университет, я поставил перед собой цель: раз и навсегда самому
            разобраться с химией и помочь в этом остальным. Так в 2015 году появился этот сайт,
            который помог уже более 5 млн человек по всему миру!
          </p>
          <p className={cn(styles.history__text, styles.section__text)}>
            За 7 лет работы репетитором я изучил все школьные учебники по химии, провёл больше 1000
            занятий и могу с уверенностью сказать, что этот учебник самый лучший и понятный.
          </p>
        </div>
        <div className={cn(styles.program, styles.section)}>
          <h3 className={cn(styles.program__title, styles.section__title)}>Программа учебника</h3>
          <p className={cn(styles.program__text, styles.section__text)}>
            Учебник состоит из 39 уроков. В конце каждого урока есть небольшой тест для закрепления
            материала. Только после успешного прохождения теста вы сможете приступить к изучению
            следующего урока.
          </p>
          <ul className={styles.program__list}>
            {PROGRAM_CARDS.map((card, index) => (
              <ProgramCard programCard={card} key={`Program-card-${index}`} />
            ))}
          </ul>
        </div>
        <div className={cn(styles.audience, styles.section)}>
          <h3 className={cn(styles.audience__title, styles.section__title)}>
            Этот учебник для вас, если...
          </h3>
          <ul className={styles.audience__list}>
            <li className={styles.audience__item}>
              <Image
                className={styles.history__image}
                src="/school.svg"
                alt="school icon"
                width={75}
                height={75}
                priority
              />
              <span className={styles.section__text}>
                Вы учитесь в школе, пропустили несколько занятий и теперь не понимаете, о чём
                говорит учитель {'('}а возможно и раньше не понимали{')'}
              </span>
            </li>
            <li className={styles.audience__item}>
              <Image
                className={styles.history__image}
                src="/student.svg"
                alt="student icon"
                width={75}
                height={75}
                priority
              />
              <span className={styles.section__text}>
                Вы студент первого-второго курса и хотите быстро вспомнить всю школьную химию для
                зачётов и экзаменов
              </span>
            </li>
            <li className={styles.audience__item}>
              <Image
                className={styles.history__image}
                src="/allpeople.svg"
                alt="allpeople icon"
                width={75}
                height={75}
                priority
              />
              <span className={styles.section__text}>
                Вам просто нравится химия. Возможно, когда-то давно вы её уже изучали, но сейчас
                хотите раз и навсегда разобраться в этой науке
              </span>
            </li>
          </ul>
          <Button>Начать обучение</Button>
        </div>
        <Reviews reviews={REVIEWS} />
      </main>
      <footer className={styles.footer}>
        <span>© 2015-2024 HIMI4KA.RU</span>
      </footer>
    </div>
  );
}
