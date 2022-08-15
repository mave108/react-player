import React, { FC, useEffect, useLayoutEffect, useRef } from 'react';
import { VideoProps } from './types';
import { useStore } from '../../store/store';
import * as action from '../../store/actions';
import '../../styles/styles.scss';

export const Video: FC<VideoProps> = ({ src }) => {
  // video handle
  const video = useRef<HTMLVideoElement>(null);
  //store
  const { state, dispatch } = useStore();

  useLayoutEffect(() => {
    //disable default controls
    const { current: videoHandle } = video;
    if (videoHandle) {
      videoHandle.controls = false;

      console.log('canPlay', videoHandle.canPlayType('video/mp4'), state);
    }
  }, []);

  //when finish loaing
  const handleCanPlay = () => {
    dispatch(action.setLoading(true));
  };

  //when finish loaing metadata
  const handleLoadedMetadata = () => {
    const { current: videoHandle } = video;
    if (videoHandle) {
      const { duration } = videoHandle;
      dispatch(action.updateDuration(duration));
    }
  };

  //update video progress
  function handleProgress() {
    const { current: videoHandle } = video;
    if (videoHandle) {
      const { currentTime } = videoHandle;
      dispatch(action.updateElapsedTime(currentTime));
    }
  }
  //fires when media finished playing
  function handleEndPlay() {
    //update media play status
    dispatch(action.togglePlay(false));
  }

  //subscribe play pause event
  useEffect(() => {
    const { current: videoHandle } = video;
    if (videoHandle) {
      if (state.isPlaying) {
        videoHandle.play().catch(() => {
          //revert playing status
          dispatch(action.togglePlay(false));
          throw new Error('Errror occured while playing media.');
        });
      } else {
        videoHandle.pause();
      }
    }
  }, [state.isPlaying]);

  return (
    <video
      ref={video}
      onCanPlay={handleCanPlay}
      onLoadedMetadata={handleLoadedMetadata}
      onTimeUpdate={handleProgress}
      onEnded={handleEndPlay}
    >
      <source src={src}></source>
    </video>
  );
};
