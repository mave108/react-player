import React, { FC } from 'react';
import './style.scss';
import { Video } from '../video';
import { PlayerProps, PreloadProps } from './types';
import { StoreProvider } from '../../store/store';
import { ProgressBar } from '../progress-bar';

export const Player: FC<PlayerProps> = ({
  id,
  src,
  height,
  width,
  poster,
  autoplay,
  loop,
  preload = PreloadProps.AUTO,
}) => {
  return (
    <div id={id} className="player">
      <StoreProvider>
        <Video src={src} id={id} height={height} width={width} />
        <div className="controls">
          <div className="progress">
            <ProgressBar progress={33} />
          </div>
        </div>
      </StoreProvider>
    </div>
  );
};
