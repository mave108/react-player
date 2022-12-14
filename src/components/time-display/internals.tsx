import React, { FC } from 'react';
import { TimeDisplayProps } from './types';
import './style.scss';
import { useStore } from '../../store/store';
import { formatTime } from '../../utils';

export const TimeDisplay: FC<TimeDisplayProps> = () => {
  const {
    state: { elapsedTime, duration },
  } = useStore();

  return (
    <div className="time-display">
      <span className="time-current">{formatTime(elapsedTime)}</span>
      <span className="time-seprator"> / </span>
      <span className="time-duration">{formatTime(duration)}</span>
    </div>
  );
};
