import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

const ORB_COUNT = 6;

export const AnimatedBackground: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ overflow: 'hidden', background: 'linear-gradient(135deg, #09111f 0%, #0f172a 30%, #1d3557 100%)' }}>
      {Array.from({ length: ORB_COUNT }).map((_, index) => {
        const size = 180 + index * 90;
        const x = 120 + index * 175 + (frame * (index % 2 === 0 ? 1.1 : -1.2)) % 220;
        const y = 120 + (index * 190 + frame * (index % 2 === 0 ? 0.7 : -0.9)) % 1600;
        const opacity = 0.18 + index * 0.04;
        const radius = 36 + index * 18;

        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${x}px`,
              top: `${y}px`,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: `${radius}%`,
              background: index % 2 === 0 ? 'radial-gradient(circle, rgba(125,211,252,0.45), rgba(125,211,252,0))' : 'radial-gradient(circle, rgba(251,191,36,0.38), rgba(251,191,36,0))',
              opacity,
              transform: `scale(${1 + interpolate(frame, [0, 60], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })})`,
              filter: 'blur(20px)',
            }}
          />
        );
      })}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(9,17,31,0.18) 0%, rgba(15,23,42,0.52) 100%)',
        }}
      />
    </AbsoluteFill>
  );
};
