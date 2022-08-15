import React, { FC } from 'react';
import { ControlBarProps } from './types';

export const ControlBar: FC<ControlBarProps> = ({ children }) => {
  return <div className="control-bar">{children}</div>;
};
