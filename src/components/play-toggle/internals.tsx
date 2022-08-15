import React, { FC, useEffect } from 'react';
import { PlayToggleProps } from './types';
import './style.scss';
import PlaySVG from '../svg-icons/play';
import PauseSVG from '../svg-icons/pause';
import { useStore } from '../../store/store';
import { togglePlay } from '../../store/actions';
// import { ReactComponent as Play } from '../../svg/play.svg';

export const PlayToggle: FC<PlayToggleProps> = () => {
  const {
    state: { isPlaying },
    dispatch,
  } = useStore();

  function handleTogglePlay() {
    if (isPlaying) {
      dispatch(togglePlay(false));
    } else {
      dispatch(togglePlay(true));
    }
  }
  return (
    <button className="play-toggle" onClick={handleTogglePlay}>
      {isPlaying ? <PauseSVG /> : <PlaySVG />}
    </button>
  );
};
