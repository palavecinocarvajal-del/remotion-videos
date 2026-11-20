import React from 'react';
import {Composition} from 'remotion';
import {Presentacion} from './Presentacion';
import {FSAutos} from './FSAutos';

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="Presentacion" component={Presentacion} durationInFrames={300} fps={30} width={1080} height={1920} />
    <Composition id="FSAutos" component={FSAutos} durationInFrames={600} fps={30} width={1080} height={1920} />
  </>
);
