import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const Presentacion: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20, 120, 149], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scale = interpolate(frame, [0, 25], [0.9, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: '#0b1220', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{fontFamily: 'Arial, sans-serif', color: 'white', textAlign: 'center', opacity, transform: `scale(${scale})`}}>
        <h1 style={{fontSize: 110, margin: 0}}>Mi primer video</h1>
        <p style={{fontSize: 45, color: '#90e5b3'}}>Creado con Remotion</p>
      </div>
    </AbsoluteFill>
  );
};
