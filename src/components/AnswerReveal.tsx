import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { videoConfig } from '../utils/quiz';

type AnswerRevealProps = {
  answer: string;
};

export const AnswerReveal: React.FC<AnswerRevealProps> = ({ answer }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 8, 32], [0, 1, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const y = interpolate(frame, [0, 24], [30, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const scale = interpolate(frame, [0, 18], [0.9, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '80px 72px' }}>
      <div
        style={{
          opacity,
          transform: `translateY(${y}px) scale(${scale})`,
          color: videoConfig.textColor,
          fontSize: videoConfig.answerFontSize,
          fontWeight: 900,
          letterSpacing: '-0.05em',
          lineHeight: 1.08,
          textAlign: 'center',
          maxWidth: '840px',
          padding: '24px 40px',
          borderRadius: '28px',
          background: 'rgba(15, 23, 42, 0.56)',
          border: `2px solid ${videoConfig.accentColor}`,
          boxShadow: '0 24px 60px rgba(7, 89, 133, 0.38)',
        }}
      >
        Answer: {answer}
      </div>
    </AbsoluteFill>
  );
};
