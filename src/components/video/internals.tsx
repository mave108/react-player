import React, { FC } from 'react';
import { VideoProps } from './types';

export const Video: FC<VideoProps> = ({ src }) => {
  return (
    <video controls>
      <source src={src}></source>
    </video>
  );
};
