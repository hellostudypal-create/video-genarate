import { AbsoluteFill, Sequence, useVideoConfig } from 'remotion';
import { AnimatedBackground } from '../components/Background';
import { AnswerReveal } from '../components/AnswerReveal';
import { Countdown } from '../components/Countdown';
import { Explanation } from '../components/Explanation';
import { ProgressBar } from '../components/ProgressBar';
import { QuizQuestion } from '../components/QuizQuestion';
import type { QuizQuestion as QuizQuestionType } from '../types/quiz';
import { videoConfig } from '../utils/quiz';

type QuizVideoProps = {
  question: QuizQuestionType;
};

export const QuizVideo: React.FC<QuizVideoProps> = ({ question }) => {
  const { fps, durationInFrames } = useVideoConfig();
  const totalFrames = durationInFrames ?? Math.round((videoConfig.questionDuration + videoConfig.countdownDuration + videoConfig.answerDuration + (question.explanation ? videoConfig.explanationDuration : 0) + videoConfig.endCardDuration) * fps);

  const questionFrames = Math.round(videoConfig.questionDuration * fps);
  const countdownFrames = Math.round(videoConfig.countdownDuration * fps);
  const answerFrames = Math.round(videoConfig.answerDuration * fps);
  const explanationFrames = question.explanation ? Math.round(videoConfig.explanationDuration * fps) : 0;
  const endCardFrames = Math.round(videoConfig.endCardDuration * fps);

  return (
    <AbsoluteFill style={{
background: '#06111d',
translate: "-67px 0px"
}}>
      <AnimatedBackground />
      <ProgressBar totalFrames={totalFrames} />

      <Sequence from={0} durationInFrames={questionFrames}>
        <QuizQuestion question={question.question} />
      </Sequence>

      <Sequence from={questionFrames} durationInFrames={countdownFrames}>
        <Countdown countdownFrom={5} />
      </Sequence>

      <Sequence from={questionFrames + countdownFrames} durationInFrames={answerFrames}>
        <AnswerReveal answer={question.answer} />
      </Sequence>

      {question.explanation ? (
        <Sequence from={questionFrames + countdownFrames + answerFrames} durationInFrames={explanationFrames}>
          <Explanation explanation={question.explanation} />
        </Sequence>
      ) : null}

      <Sequence from={questionFrames + countdownFrames + answerFrames + explanationFrames} durationInFrames={endCardFrames}>
        <AbsoluteFill style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
          <div
            style={{
              textAlign: 'center',
              color: videoConfig.textColor,
              fontSize: 72,
              fontWeight: 900,
              letterSpacing: '-0.04em',
              padding: '30px 48px',
              borderRadius: '28px',
              background: 'rgba(15, 23, 42, 0.50)',
              border: `2px solid ${videoConfig.accentColor}`,
            }}
          >
            Did you get it right?
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
