import styles from './reviewCard.module.css';
import Image from 'next/image';
import { getRandomNumber } from '@/app/utils';

export interface ReviewCardType {
  rating: number;
  name: string;
  date: string;
  text: string;
}

interface ReviewCardProps {
  reviewCard: ReviewCardType;
}

const ReviewCard = ({ reviewCard }: ReviewCardProps): JSX.Element => {
  const rating = Array(reviewCard.rating).fill(0);

  return (
    <li className={styles.reviews__item}>
      <div className={styles.reviews__itemRating}>
        {rating.map((item, index) => (
          <Image
            className={styles.reviews__itemRatingStar}
            src="/star.svg"
            alt="star icon"
            width={16}
            height={16}
            priority
            key={`review-star-${index}`}
          />
        ))}
      </div>
      <div className={styles.reviews__itemContent}>
        <p className={styles.section__text}>{reviewCard.text}</p>
      </div>
      <div className={styles.reviews__itemInfo}>
        <Image
          className={styles.reviews__itemInfoAvatar}
          src={`/avatars/avatar${getRandomNumber(1, 5)}.png`}
          alt="star icon"
          width={42}
          height={42}
          priority
        />
        <div className={styles.reviews__itemInfoWrapper}>
          <span className={styles.reviews__itemInfoName}>{reviewCard.name}</span>
          <span className={styles.reviews__itemInfoDate}>{reviewCard.date}</span>
        </div>
      </div>
    </li>
  );
};

export default ReviewCard;
