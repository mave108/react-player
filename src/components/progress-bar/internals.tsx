import React, { FC, useRef, useEffect, useState } from 'react';
import { ProgressBarProps } from './types';
import './style.scss';
import { useStore } from '../../store/store';
import { togglePlay, updateElapsedTime } from '../../store/actions';
import { throttle, debounce } from 'lodash';
import { round } from '../../utils';

export const ProgressBar: FC<ProgressBarProps> = ({ progress: progressProps, seekable = true }) => {
  const {
    state: { elapsedTime, duration },
    dispatch,
  } = useStore();
  const [progress, updateVideoProgress] = useState(0);
  const seekableHandle = useRef<HTMLSpanElement>(null);
  const meterRef = useRef<HTMLDivElement>(null);
  console.log('load', elapsedTime, duration);
  const throttledStateUpdation = throttle(
    (newProgress, duration) => {
      //update meter progress
      updateVideoProgress(newProgress);
      //update elapsed time
      const newElapsedTime = (newProgress / 100) * duration;
      console.log('new elaspsed time 4444', newProgress, newElapsedTime, duration);
      dispatch(updateElapsedTime(newElapsedTime));
    },
    250,
    { leading: false, trailing: true }
  );

  function moveKnob(where: number) {
    const { current } = seekableHandle;
    const { current: meterHandle } = meterRef;
    if (current && meterHandle) {
      current.classList.add('keep-visible');
      current.style.transform = `translate(${where}px,-6px)`;
    }
  }

  function mouseUp() {
    dispatch(togglePlay(true));
    const { current } = seekableHandle;
    if (current) {
      current.classList.remove('keep-visible');
    }
    window.removeEventListener('mousemove', seekKnob);
    window.removeEventListener('mouseup', mouseUp);
  }

  function mouseDown() {
    dispatch(togglePlay(false));
    window.addEventListener('mousemove', seekKnob);
    window.addEventListener('mouseup', mouseUp);
  }
  function seekKnob(e: MouseEvent) {
    const { clientX } = e;
    const { current: knob } = seekableHandle;
    const { current: meterHandle } = meterRef;
    if (knob && meterHandle) {
      const { width, left } = meterHandle.getBoundingClientRect();
      const availableWidth = width - knob.offsetWidth;
      //prevent overflow from left and right
      const newPosition = Math.min(Math.max(clientX - left, 0), availableWidth);
      const newProgress = (newPosition / availableWidth) * 100;
      moveKnob(newPosition);
      throttledStateUpdation.cancel(); //cancel preveious invocation
      throttledStateUpdation(newProgress, duration);
    }
  }

  useEffect(() => {
    const { current } = seekableHandle;
    if (current) {
      current.addEventListener('mousedown', mouseDown);
    }
  }, []);

  useEffect(() => {
    updateVideoProgress((elapsedTime / duration) * 100);
  }, [duration]);

  useEffect(() => {
    // const onePercent = width / 100;
    const { current: meterHandle } = meterRef;
    const { current: knob } = seekableHandle;
    if (elapsedTime <= 0 || duration <= 0) return;
    const newProgress = (elapsedTime / duration) * 100;
    if (meterHandle && knob) {
      const { width } = meterHandle.getBoundingClientRect();
      const newKnobPosition = (newProgress / 100) * (width - knob.offsetWidth);
      console.log('progress changed---', newKnobPosition, knob.offsetWidth);
      moveKnob(round(newKnobPosition));
    }
    updateVideoProgress(round(newProgress));
  }, [elapsedTime]);

  return (
    <div className="meter" ref={meterRef}>
      <span style={{ width: `${progress}%` }}>
        <span className="knob" ref={seekableHandle} draggable={false}></span>
      </span>
    </div>
  );
};
