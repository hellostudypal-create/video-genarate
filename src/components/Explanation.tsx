import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { videoConfig } from '../utils/quiz';

type ExplanationProps = {
  explanation: string;
};

export const Explanation: React.FC<ExplanationProps> = ({ explanation }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 8, 30], [0, 1, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const y = interpolate(frame, [0, 20], [20, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '80px 72px' }}>
      <div
        style={{
          opacity,
          transform: `translateY(${y}px)`,
          maxWidth: '820px',
          textAlign: 'center',
          fontSize: videoConfig.explanationFontSize,
          lineHeight: 1.4,
          color: 'rgba(248, 250, 252, 0.9)',
          fontWeight: 500,
        }}
      >
        {explanation}
      </div>
    </AbsoluteFill>
  );
};
