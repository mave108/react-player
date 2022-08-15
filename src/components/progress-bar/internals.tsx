import React, { FC } from 'react';
import { ProgressBarProps } from './types';
import './style.scss';
import { useStore } from '../../store/store';

export const ProgressBar: FC<ProgressBarProps> = ({ progress: progressProps }) => {
  const {
    state: { elapsedTime, duration },
  } = useStore();

  const progress = (elapsedTime / duration) * 100;
  return (
    <div className="meter">
      <span style={{ width: `${progress}%` }}></span>
    </div>
  );
};
