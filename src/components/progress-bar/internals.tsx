import React, { FC, useRef, useEffect, MouseEventHandler } from 'react';
import { ProgressBarProps } from './types';
import './style.scss';
import { useStore } from '../../store/store';
import { togglePlay, updateElapsedTime } from '../../store/actions';

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
    // console.log('seeking time', e.clientX / width);
    // const percentSeeked = (e.clientX / (width - knobWidth)) * 100;
    // const newSeekTime = (duration / 100) * percentSeeked;
    // dispatch(updateElapsedTime(newSeekTime));
  }
  function mouseUp() {
    dispatch(togglePlay(true));
    const { current } = seekableHandle;
    if (current) {
      current.classList.remove('keep-visible');
    }
    window.removeEventListener('mousemove', mouseMove);
    window.removeEventListener('mouseup', mouseUp);
  }

  function mouseDown() {
    dispatch(togglePlay(false));
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', mouseUp);
  }
  function mouseMove(e: MouseEvent) {
    const { clientX } = e;
    const { current } = seekableHandle;
    if (current) {
      current.classList.add('keep-visible');
      current.style.transform = `translate(${clientX}px,-4px)`;
      console.log('move', current, clientX);
    }
  }
  useEffect(() => {
    const { current } = seekableHandle;
    if (current) {
      current.addEventListener('mousedown', mouseDown);
    }
  }, []);

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
