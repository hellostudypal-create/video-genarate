export type QuizQuestion = {
  id: string;
  question: string;
  answer: string;
  explanation?: string;
};

export type QuizConfig = {
  videoWidth: number;
  videoHeight: number;
  fps: number;
  questionDuration: number;
  countdownDuration: number;
  answerDuration: number;
  explanationDuration: number;
  endCardDuration: number;
  questionFontSize: number;
  answerFontSize: number;
  explanationFontSize: number;
  countdownFontSize: number;
  backgroundColors: [string, string];
  accentColor: string;
  secondaryColor: string;
  textColor: string;
  animation: {
    fadeInMs: number;
    fadeOutMs: number;
    countDownIntervalMs: number;
    revealDurationMs: number;
  };
};
