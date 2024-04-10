import Image from 'next/image';
import styles from './page.module.css';
import cn from 'classnames';
import Definition from '@/components/definition/definition';
import Test, { Question } from '@/components/test/test';

const QUESTIONS: Question[] = [
  {
    questionId: '1',
    question: 'Выберите все верные утверждения:',
    variants: [
      {
        variantId: '1',
        variant: 'Атомы – это мельчайшие частицы;',
        isTrue: true,
        isChecked: false,
      },
      {
        variantId: '2',
        variant: 'Существуют атомы мяса, дерева, стекла и вообще чего угодно;',
        isTrue: false,
        isChecked: false,
      },
      {
        variantId: '3',
        variant: 'Атомы можно разделить на более мелкие частицы химическим путём;',
        isTrue: false,
        isChecked: false,
      },
      {
        variantId: '4',
        variant: 'При химических реакциях атомы переходят из одних веществ в другие;',
        isTrue: true,
        isChecked: false,
      },
      {
        variantId: '5',
        variant: 'Атомы разных химических элементов не различаются между собой;',
        isTrue: false,
        isChecked: false,
      },
    ],
  },
];

export default function Lesson1() {
  return (
    <>
      <div className={cn(styles.intro, styles.section)}>
        <div className={styles.intro__content}>
          <h1 className={styles.intro__title}>Урок 1. Атомы и химические элементы</h1>
          <p className={styles.intro__text}>
            В этом уроке вы узнаете о строении атома. Поймёте, что происходит с атомами во время
            химических реакций. Познакомитесь с понятием химический элемент. А также узнаете, чем
            атом отличается от химического элемента.
          </p>
        </div>
        <Image
          className={styles.intro__image}
          src="/articles/1/cover.jpg"
          alt="Intro image"
          width={800}
          height={800}
          priority
        />
      </div>
      <article className={styles.article}>
        <section className={styles.article__section}>
          <p className={styles.section__text}>
            Нас окружают разные вещества – пластик, дерево, металл. А из чего состоят сами вещества?
            Что представляют собой частицы, которые дальше уже нельзя разделить? Учёные задумывались
            над этими вопросами еще в древности.
          </p>
          <h3 className={styles.section__title}>Атомное строение вещества</h3>
          <p className={styles.section__text}>
            Философы Древней Греции еще за 400 лет до нашей эры считали, что существуют крохотные
            кирпичики, из которых состоят вещества.
          </p>
          <p className={styles.section__text}>
            Они думали, что каждое вещество состоит из отдельного вида атомов. То есть существуют
            атомы мяса, атомы песка, дерева, воды... Другими словами, сколько веществ - столько и
            видов атомов.
          </p>
          <p className={styles.section__text}>
            Доказательств существования атомов в то время не было, поэтому это учение было забыто.
            Однако в начале 19 века английский ученый Джон Дальтон возродил идею атомного строения
            веществ.
          </p>
          <p className={styles.section__text}>
            Он решил, что все вещества состоят из очень маленьких частиц — атомов. Когда происходят
            химические реакции, атомы не разрушаются и не возникают вновь. Атомы только переходят из
            одних веществ в другие.
          </p>
          <p className={styles.section__text}>
            Это как детали конструктора. Из деталей можно собирать разные игрушки, а из атомов –
            разные вещества.
          </p>
          <Definition>Атомы – мельчайшие, химически неделимые частицы</Definition>
        </section>
        <section className={styles.article__section}>
          <h3 className={styles.section__title}>Химические элементы</h3>
          <p className={styles.section__text}>
            Число атомов во Вселенной бесконечно большое. Однако видов атомов всего 118. Каждый
            такой определенный вид атомов называется химическим элементом.
          </p>
          <Definition>Химический элемент – определённый вид атомов</Definition>
          <p className={styles.section__text}>
            Позже, после изучения строения атома, вы узнаете более точное определение этого понятия.
          </p>
          <p className={styles.section__text}>
            На 2024 год известно 118 химических элементов. Атомы одного и того же элемента имеют
            одинаковые размеры, практически одинаковое строение и массу. Атомы разных элементов -
            нет.
          </p>
          <p className={styles.section__text}>
            <i>
              На заметку: из 118 химических элементов в природе встречается только 92, а остальные
              26 получены искусственно с помощью специальных физических методов.
            </i>
          </p>
          <p className={styles.section__text}>
            Из атомов такого небольшого числа химических элементов построены все вещества,
            существующие в природе и полученные химиками в лабораториях. А это более 60 млн веществ.
            Все они - самые разные сочетания атомов тех или иных элементов.
          </p>
          <p className={styles.section__text}>
            Из 33 букв алфавита составлены все слова русского языка, а из атомов небольшого числа
            элементов состоят все известные вещества.
          </p>
        </section>
        <section className={styles.article__section}>
          <h3 className={styles.section__title}>Символы химических элементов</h3>
          <p className={styles.section__text}>
            Каждый элемент имеет своё название и условное обозначение – химический символ.
          </p>
          <Definition>
            Химический символ – обозначение химического элемента с помощью букв его латинского
            названия
          </Definition>
          <p className={styles.section__text}>
            Посмотрите на Таблицу Менделеева. Пока не нужно вникать, что и как там устроено. Просто
            познакомьтесь с ней.
          </p>
          <Image
            className={styles.section__image}
            src="/articles/1/periodicals-table.jpg"
            alt="history image"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            priority
          />
          <p className={styles.section__text}>
            Символы химических элементов состоят из одной или двух букв их латинских названий.
            Понятно, что вторая буква нужна, чтобы различать элементы, у которых первая буква
            одинакова.
          </p>
          <p className={styles.section__text}>
            Например, элемент углерод обозначается первой буквой <b>С</b> его латинского названия -{' '}
            <b>C</b>arboneum (карбонеум), а элемент медь - двумя первыми буквами <b>Cu</b> его
            латинского названия - <b>Cu</b>prum (купрум).
          </p>
          <p className={styles.section__text}>
            В школьном курсе химии вам не нужно будет знать все 118 элементов. Достаточно выучить 20
            самых распространённых. Их названия, символы и произношение приведены в таблице ниже:
          </p>
          <div className={styles.section__tableContainer}>
            <table className={styles.section__table}>
              <thead>
                <tr>
                  <th>Название химического элемента</th>
                  <th>Химический знак элемента</th>
                  <th>Произношение</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Азот</td>
                  <td>N</td>
                  <td>Эн</td>
                </tr>
                <tr>
                  <td>Алюминий</td>
                  <td>Al</td>
                  <td>Алюминий</td>
                </tr>
                <tr>
                  <td>Водород</td>
                  <td>H</td>
                  <td>Аш</td>
                </tr>
                <tr>
                  <td>Железо</td>
                  <td>Fe</td>
                  <td>Феррум</td>
                </tr>
                <tr>
                  <td>Золото</td>
                  <td>Au</td>
                  <td>Аурум</td>
                </tr>
                <tr>
                  <td>Калий</td>
                  <td>K</td>
                  <td>Калий</td>
                </tr>
                <tr>
                  <td>Кальций</td>
                  <td>Ca</td>
                  <td>Кальций</td>
                </tr>
                <tr>
                  <td>Кислород</td>
                  <td>O</td>
                  <td>O</td>
                </tr>
                <tr>
                  <td>Кремний</td>
                  <td>Si</td>
                  <td>Силициум</td>
                </tr>
                <tr>
                  <td>Магний</td>
                  <td>Mg</td>
                  <td>Магний</td>
                </tr>
                <tr>
                  <td>Медь</td>
                  <td>Cu</td>
                  <td>Купрум</td>
                </tr>
                <tr>
                  <td>Натрий</td>
                  <td>Na</td>
                  <td>Натрий</td>
                </tr>
                <tr>
                  <td>Ртуть</td>
                  <td>Hg</td>
                  <td>Гидраргиум</td>
                </tr>
                <tr>
                  <td>Свинец</td>
                  <td>Pb</td>
                  <td>Плюмбум</td>
                </tr>
                <tr>
                  <td>Сера</td>
                  <td>S</td>
                  <td>Эс</td>
                </tr>
                <tr>
                  <td>Серебро</td>
                  <td>Ag</td>
                  <td>Аргентум</td>
                </tr>
                <tr>
                  <td>Углерод</td>
                  <td>C</td>
                  <td>Цэ</td>
                </tr>
                <tr>
                  <td>Фосфор</td>
                  <td>Пэ</td>
                  <td>Магний</td>
                </tr>
                <tr>
                  <td>Хлор</td>
                  <td>Cl</td>
                  <td>Хлор</td>
                </tr>
                <tr>
                  <td>Цинк</td>
                  <td>Zn</td>
                  <td>Цинк</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className={styles.test}>
          <Test questions={QUESTIONS} />
        </section>
      </article>
    </>
  );
}
