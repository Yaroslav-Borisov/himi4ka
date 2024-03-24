import styles from './programCard.module.css';
import Image from 'next/image';
import cn from 'classnames';

export interface ProgramCard {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string[];
}

interface ProgramCardProps {
  programCard: ProgramCard;
}

const ProgramCard = ({ programCard }: ProgramCardProps): JSX.Element => {
  return (
    <li className={styles.program__item}>
      <Image
        className={styles.item__image}
        src={programCard.image.src}
        alt={programCard.image.alt}
        width={100}
        height={100}
        priority
      />
      <div className={styles.item__content}>
        <h4 className={styles.item__title}>{programCard.title}</h4>
        <ul className={styles.item__contentList}>
          {programCard.description.map((item, index) => (
            <li
              className={cn(styles.item__contentItem, styles.section__text)}
              key={`programCard-desc-${index}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ProgramCard;
