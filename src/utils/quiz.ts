import type { QuizConfig, QuizQuestion } from '../types/quiz';

export const videoConfig: QuizConfig = {
  videoWidth: 1080,
  videoHeight: 1920,
  fps: 30,
  questionDuration: 5,
  countdownDuration: 5,
  answerDuration: 3,
  explanationDuration: 3,
  endCardDuration: 2,
  questionFontSize: 84,
  answerFontSize: 102,
  explanationFontSize: 42,
  countdownFontSize: 260,
  backgroundColors: ['#09111f', '#1a2b45'],
  accentColor: '#7dd3fc',
  secondaryColor: '#fbbf24',
  textColor: '#f8fafc',
  animation: {
    fadeInMs: 400,
    fadeOutMs: 400,
    countDownIntervalMs: 1000,
    revealDurationMs: 600,
  },
};

export const readQuestions = async (): Promise<QuizQuestion[]> => {
  const response = await fetch(new URL('../data/questions.json', import.meta.url).href);
  if (!response.ok) {
    throw new Error(`Failed to load questions.json: ${response.status}`);
  }

  const questions = (await response.json()) as QuizQuestion[];
  return questions;
};

export const formatVideoFilename = (index: number): string => `quiz-${String(index).padStart(3, '0')}.mp4`;

export const getQuestionDuration = (question: QuizQuestion): number => {
  return videoConfig.questionDuration + videoConfig.countdownDuration + videoConfig.answerDuration + (question.explanation ? videoConfig.explanationDuration : 0) + videoConfig.endCardDuration;
};
