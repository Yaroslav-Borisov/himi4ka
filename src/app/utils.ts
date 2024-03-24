import { ReviewCardType } from "@/components/reviewCard/reviewCard";

export const getRandomNumber = (min: number, max: number) => {
    return (Math.random() * (max - min) + min).toFixed(0);
}

export const getAverageRating = (reviews: ReviewCardType[]) => {
    return (reviews.map((item) => item.rating).reduce((sum, a) => sum + a, 0) / reviews.length).toFixed(1)
}

export const getPercentage = (reviews: ReviewCardType[], starNumber: number) => {
    return (reviews.filter((item) => item.rating === starNumber).length / reviews.length) * 100;
}