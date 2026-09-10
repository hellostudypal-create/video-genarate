import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { videoConfig } from '../utils/quiz';

type QuizQuestionProps = {
  question: string;
};

export const QuizQuestion: React.FC<QuizQuestionProps> = ({ question }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 8, 20], [0, 1, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const scale = interpolate(frame, [0, 12], [0.88, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: '80px 72px' }}>
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          textAlign: 'center',
          color: videoConfig.textColor,
          fontSize: videoConfig.questionFontSize,
          lineHeight: 1.12,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          maxWidth: '880px',
          textShadow: '0 10px 30px rgba(15, 23, 42, 0.45)',
        }}
      >
        {question}
      </div>
    </AbsoluteFill>
  );
};
