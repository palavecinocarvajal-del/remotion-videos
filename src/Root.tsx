import {Composition} from 'remotion';
import {Presentacion} from './Presentacion';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="Presentacion"
      component={Presentacion}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
