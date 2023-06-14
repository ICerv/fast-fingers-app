import React from 'react';
import { useParams } from 'react-router';
import Practice from '../../components/Practice';
import { testsSections } from '../testsSections';

const TestPage = () => {
  let { sectionId, testId } = useParams();
  const section = testsSections.find((section) => section.id === Number(sectionId));
  const test = section.tests.find((test) => test.id === Number(testId));

  const targetText = test.exercises[0];

  const nextExercise = () => {
    testId = Number(testId);
    sectionId = Number(sectionId);

    const min = 0;
    const max = section.tests.length - 1;

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const nextSectionId = sectionId;
    const nextTestId = section.tests[randomNumber].id;
    return `/section/${nextSectionId}/test/${nextTestId}`;
  };

  return (
    <>
      <Practice targetText={targetText} nextLink={nextExercise()} backUrl="/tests" exerciseMode={false} />;
    </>
  );
};

export default TestPage;
