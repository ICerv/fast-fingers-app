import React from 'react';
import { useParams } from 'react-router';
import Practice from '../../components/Practice';
import { exercisesSections } from '../exercisesSections';

const TrainingPage = () => {
  let { sectionId, lessonId, exerciseId } = useParams();
  const section = exercisesSections.find((section) => section.id === Number(sectionId));
  const lesson = section.lessons.find((lesson) => lesson.id === Number(lessonId));
  const exercise = lesson.exercises[Number(exerciseId)];
  const targetText = exercise;

  const nextExercise = () => {
    lessonId = Number(lessonId);
    exerciseId = Number(exerciseId);
    sectionId = Number(sectionId);

    if (exerciseId + 1 === lesson.exercises.length) {
      if (section.lessons.some((lesson) => lesson.id === lessonId + 1)) {
        return `/section/${sectionId}/lesson/${lessonId + 1}/exercise/0`;
      } else {
        if (sectionId === 4) {
          return '/lessons';
        } else {
          lessonId = exercisesSections.find((section) => section.id === sectionId + 1).lessons[0].id;
          return `/section/${sectionId + 1}/lesson/${lessonId}/exercise/0`;
        }
      }
    }

    return `/section/${sectionId}/lesson/${lesson.id}/exercise/${exerciseId + 1}`;
  };

  return <Practice targetText={targetText} backUrl={'/lessons'} nextLink={nextExercise()} exerciseMode={true} />;
};
export default TrainingPage;
