import React, { FC } from 'react';
import { ControlBarProps } from './types';
import { PlayToggle } from '../play-toggle';
import { TimeDisplay } from '../time-display';

export const ControlBar: FC<ControlBarProps> = ({ children }) => {
  return <div className="control-bar">{children}</div>;
};

export const DefaultControls = () => {
  return (
    <ControlBar>
      <PlayToggle />
      <TimeDisplay />
    </ControlBar>
  );
};
