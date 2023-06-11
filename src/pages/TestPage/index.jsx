import React from 'react';
import { useParams } from 'react-router';
import './style.css';
import Practice from '../../components/Practice';
import { testsSections } from '../testsSections';

const TestPage = () => {
  const { sectionId, testId } = useParams();
  const section = testsSections.find((section) => section.id === Number(sectionId));
  const test = section.tests.find((test) => test.id === Number(testId));

  const targetText = test.exercises[0];

  return (
    <>
      <Practice targetText={targetText} backUrl="/tests" />;
    </>
  );
};
export default TestPage;
