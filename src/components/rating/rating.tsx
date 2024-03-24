import styles from './rating.module.css';
import Image from 'next/image';
import cn from 'classnames';
import REVIEWS from '@/app/content/reviews';
import ReviewCard, { ReviewCardType } from '../reviewCard/reviewCard';
import { getAverageRating, getPercentage } from '@/app/utils';

interface RatingProps {
  reviews: ReviewCardType[];
}

const Rating = ({ reviews }: RatingProps): JSX.Element => {
  const rating = Array(5)
    .fill(5)
    .map((item, index) => Array(item - index).fill(1));

  const reviewsAmount = reviews.length;

  const fiveStarPercent =
    (reviews.filter((item) => item.rating === 5).length / reviewsAmount) * 100;
  const fourStarPercent =
    (reviews.filter((item) => item.rating === 4).length / reviewsAmount) * 100;
  const threeStarPercent =
    (reviews.filter((item) => item.rating === 3).length / reviewsAmount) * 100;
  const twoStarPercent = (reviews.filter((item) => item.rating === 2).length / reviewsAmount) * 100;
  const oneStarPercent = (reviews.filter((item) => item.rating === 1).length / reviewsAmount) * 100;

  const averageRating = getAverageRating(reviews);

  return (
    <div className={styles.reviews__rating}>
      <div className={styles.reviews__ratingCountWrapper}>
        <span className={styles.reviews__ratingCount}>{averageRating}</span>
        <span className={styles.reviews__ratingTotal}>из 5</span>
      </div>
      <ul className={styles.reviews__ratingList}>
        {rating.map((ratingArr, index) => (
          <li className={styles.reviews__ratingItem} key={`rating-item-${index}`}>
            <div className={styles.reviews__ratingItemStars}>
              {ratingArr.map((item, index) => (
                <Image
                  key={`rating-star-${index}`}
                  className={styles.reviews__ratingItemStar}
                  src="/star.svg"
                  alt="star icon"
                  width={16}
                  height={16}
                  priority
                />
              ))}
            </div>
            <div
              className={styles.reviews__ratingItemScale}
              style={{
                background: `linear-gradient(90deg, var(--font-title-color) 0%, var(--font-title-color) ${getPercentage(
                  reviews,
                  ratingArr.length
                )}%, var(--border-color) ${getPercentage(
                  reviews,
                  ratingArr.length
                )}%, var(--border-color) 100%)`,
              }}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rating;
