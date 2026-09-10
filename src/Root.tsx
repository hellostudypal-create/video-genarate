import { Composition } from 'remotion';
import { QuizVideo } from './compositions/QuizVideo';
import { videoConfig } from './utils/quiz';

const defaultQuestion = {
  id: 'sample',
  question: 'Which planet is known as the Red Planet?',
  answer: 'Mars',
  explanation: 'Mars appears reddish because iron minerals in its soil have oxidized.',
};

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="QuizVideo"
        component={QuizVideo}
        defaultProps={{ question: defaultQuestion }}
        width={videoConfig.videoWidth}
        height={videoConfig.videoHeight}
        fps={videoConfig.fps}
        durationInFrames={Math.round((videoConfig.questionDuration + videoConfig.countdownDuration + videoConfig.answerDuration + videoConfig.explanationDuration + videoConfig.endCardDuration) * videoConfig.fps)}
      />
    </>
  );
};
