import React, { FC } from 'react';
import { Video } from '../video';
import { PlayerProps, PreloadProps } from './types';
import { StoreProvider } from '../../store/store';

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
    <div id={id}>
      <StoreProvider>
        <Video src={src} id={id} height={height} width={width} />
      </StoreProvider>
    </div>
  );
};
