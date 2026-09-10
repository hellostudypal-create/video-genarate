import { AbsoluteFill, interpolate, spring, useCurrentFrame } from 'remotion';
import { videoConfig } from '../utils/quiz';

type CountdownProps = {
  countdownFrom: number;
};

export const Countdown: React.FC<CountdownProps> = ({ countdownFrom }) => {
  const frame = useCurrentFrame();
  const visibleIndex = Math.min(Math.max(Math.floor(frame / videoConfig.fps), 0), countdownFrom);
  const currentValue = Math.max(countdownFrom - visibleIndex, 1);
  const bounce = spring({
    fps: videoConfig.fps,
    frame: frame % videoConfig.fps,
    durationInFrames: 12,
    config: {
      damping: 10,
      stiffness: 120,
    },
  });

  const opacity = interpolate(frame, [0, 8, videoConfig.fps], [0, 1, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const scale = 0.7 + bounce * 0.42;

  return (
    <AbsoluteFill style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          color: videoConfig.secondaryColor,
          fontSize: videoConfig.countdownFontSize,
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: '-0.08em',
          textShadow: '0 12px 30px rgba(251, 191, 36, 0.32)',
        }}
      >
        {currentValue}
      </div>
    </AbsoluteFill>
  );
};
