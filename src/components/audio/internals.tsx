import React, { FC } from 'react';
import { VideoProps } from './types';

export const Video: FC<VideoProps> = ({ src }) => {
  return (
    <audio>
      <source src={src}></source>
    </audio>
  );
};
