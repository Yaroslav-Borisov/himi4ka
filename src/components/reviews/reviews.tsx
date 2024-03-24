import styles from './reviews.module.css';
import Image from 'next/image';
import cn from 'classnames';
import REVIEWS from '@/app/content/reviews';
import ReviewCard, { ReviewCardType } from '../reviewCard/reviewCard';
import { getAverageRating } from '@/app/utils';
import Rating from '../rating/rating';

interface ReviewsProps {
  reviews: ReviewCardType[];
}

const Reviews = ({ reviews }: ReviewsProps): JSX.Element => {
  const averageRating = getAverageRating(reviews);
  const reviewsAmount = reviews.length;

  return (
    <div className={cn(styles.reviews, styles.section)}>
      <h3 className={cn(styles.reviews__title, styles.section__title)}>
        {reviewsAmount} отзывов от учеников
      </h3>
      <Rating reviews={REVIEWS} />
      <ul className={styles.reviews__list}>
        {REVIEWS.map((item, index) => (
          <ReviewCard reviewCard={item} key={`review-card-${index}`} />
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
