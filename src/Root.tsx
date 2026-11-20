import React from 'react';
import {Composition} from 'remotion';
import {Presentacion} from './Presentacion';
import {FSAutos} from './FSAutos';
import {FSAutosV2} from './FSAutosV2';

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="Presentacion" component={Presentacion} durationInFrames={300} fps={30} width={1080} height={1920} />
    <Composition id="FSAutos" component={FSAutos} durationInFrames={600} fps={30} width={1080} height={1920} />
    <Composition id="FSAutosV2" component={FSAutosV2} durationInFrames={360} fps={24} width={720} height={1280} />
  </>
);
