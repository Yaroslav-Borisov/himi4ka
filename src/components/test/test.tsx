'use client';

import { useState } from 'react';
import Button from '../button/button';
import styles from './test.module.css';
import cn from 'classnames';

export interface Question {
  questionId: string;
  question: string;
  variants: {
    variantId: string;
    variant: string;
    isTrue: boolean;
    isChecked: boolean;
  }[];
}

interface TestProps {
  questions: Question[];
}

enum ButtonState {
  COMMON = 'Проверить ответы',
  ERROR = 'Есть ошибки',
  RIGHT = 'Всё правильно!',
}

const Test = ({ questions }: TestProps): JSX.Element => {
  const [buttonState, setButtonState] = useState<ButtonState>(ButtonState.COMMON);
  const [selectedAnswers, setSelectedAnswers] = useState<Question[]>(questions);

  const getButtonClassname = () => {
    switch (buttonState) {
      case ButtonState.COMMON:
        return `${styles.test__button}`;
      case ButtonState.ERROR:
        setTimeout(() => setButtonState(ButtonState.COMMON), 3000);
        return `${styles.test__button__error}`;
      case ButtonState.RIGHT:
        return `${styles.test__button__right}`;
    }
  };

  const changeCheckedStatus = (questionIndex: number, variantIndex: number) => {
    const newQuestion: Question = [...selectedAnswers][questionIndex];
    newQuestion.variants[variantIndex].isChecked = !newQuestion.variants[variantIndex].isChecked;

    setSelectedAnswers((prev) => [
      ...prev.slice(0, questionIndex),
      newQuestion,
      ...prev.slice(questionIndex + 1),
    ]);
  };

  const getAnswers = () => {
    const trueAnswers = selectedAnswers.map((question) =>
      question.variants.filter((variant) => variant.isTrue)
    );

    const checkedAnswers = selectedAnswers.map((question) =>
      question.variants.filter((variant) => variant.isChecked)
    );

    if (JSON.stringify(trueAnswers) === JSON.stringify(checkedAnswers)) {
      setButtonState(ButtonState.RIGHT);
    } else {
      setButtonState(ButtonState.ERROR);
    }
  };

  return (
    <div className={styles.test__container}>
      <ul className={styles.test}>
        {questions.map((question, questionIndex) => (
          <li className={styles.test__item} key={`test-question-${question.questionId}`}>
            <h3 className={styles.test__question}>{question.question}</h3>
            <ul className={styles.test__answerList}>
              {question.variants.map((variant, variantIndex) => (
                <li
                  className={styles.test__answerItem}
                  key={`test-question-${question.questionId}-${variant.variantId}`}
                >
                  <input
                    className={cn(styles.test__answerItemCheckbox, styles.visually__hidden)}
                    id={`${question.questionId}-${variant.variantId}`}
                    data-questionid={question.questionId}
                    type="checkbox"
                    name="test-answer__form"
                    onClick={() => changeCheckedStatus(questionIndex, variantIndex)}
                  />
                  <label
                    className={styles.test__answerItemLabel}
                    htmlFor={`${question.questionId}-${variant.variantId}`}
                  >
                    {variant.variant}
                  </label>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Button className={getButtonClassname()} clickHandler={() => getAnswers()}>
        {buttonState}
      </Button>
    </div>
  );
};

export default Test;
