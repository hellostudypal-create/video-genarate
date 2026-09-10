import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { videoConfig } from '../utils/quiz';

type ProgressBarProps = {
  totalFrames: number;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({ totalFrames }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, totalFrames], [0, 100], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ justifyContent: 'flex-end', alignItems: 'center', padding: '32px' }}>
      <div
        style={{
          width: '100%',
          maxWidth: '820px',
          height: '10px',
          borderRadius: '999px',
          background: 'rgba(148, 163, 184, 0.18)',
          overflow: 'hidden',
          boxShadow: 'inset 0 1px 2px rgba(15, 23, 42, 0.3)',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            borderRadius: '999px',
            background: `linear-gradient(90deg, ${videoConfig.accentColor}, ${videoConfig.secondaryColor})`,
            transition: 'width 80ms linear',
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
