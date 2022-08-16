import React, { FC, useRef, useEffect, MouseEventHandler } from 'react';
import { ProgressBarProps } from './types';
import './style.scss';
import { useStore } from '../../store/store';
import { togglePlay } from '../../store/actions';

export const ProgressBar: FC<ProgressBarProps> = ({ progress: progressProps, seekable = true }) => {
  const {
    state: { elapsedTime, duration, width: videoWidth },
    dispatch,
  } = useStore();
  const progress = (elapsedTime / duration) * 100;
  const seekableHandle = useRef<HTMLSpanElement>(null);
  const meterRef = useRef<HTMLDivElement>(null);
  const width = 701;
  const knobWidth = 12;

  function moveKnob(x) {
    const { current } = seekableHandle;
    if (current && x <= width && x > 0) {
      current.style.transform = 'translate(' + x + 'px,-4px)';
    }
  }

  function handleSeek(e: React.MouseEvent<HTMLSpanElement>) {
    const { current } = seekableHandle;
    if (current) {
      current.classList.add('keep-visible');
    }
    moveKnob(e.clientX);
  }
  function mouseUp() {
    const { current } = seekableHandle;
    if (current) {
      dispatch(togglePlay(true));
      setTimeout(() => {
        current.classList.remove('keep-visible');
      }, 1000);
    }
    window.removeEventListener('mousemove', handleSeek, true);
  }

  function mouseDown() {
    dispatch(togglePlay(false));
    window.addEventListener('mousemove', handleSeek, true);
  }
  useEffect(() => {
    const { current } = seekableHandle;
    if (current) {
      current.addEventListener('mousedown', mouseDown, false);
      window.addEventListener('mouseup', mouseUp, false);
    }
  });

  useEffect(() => {
    const onePercent = width / 100;
    moveKnob(onePercent * progress - knobWidth);
  }, [progress]);

  return (
    <div className="meter" ref={meterRef}>
      <span style={{ width: `${progress}%` }}>
        <span className="knob" ref={seekableHandle} draggable={false}></span>
      </span>
    </div>
  );
};
