import React, { FC, useState } from 'react';
import { ProgressBarProps } from './types';
import './style.scss';

export const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="meter">
      <span style={{ width: `${progress}%` }}></span>
    </div>
  );
};
