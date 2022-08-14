import React, { FC } from 'react';
import { VideoProps } from './types';
import '../../styles/styles.scss';

export const Video: FC<VideoProps> = ({ src }) => {
  return (
    <video controls={false}>
      <source src={src}></source>
    </video>
  );
};
