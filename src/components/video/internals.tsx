import React, { FC, useEffect, useLayoutEffect, useRef } from 'react';
import { VideoProps } from './types';
import { useStore } from '../../store/store';
import * as action from '../../store/actions';
import './style.scss';

export const Video: FC<VideoProps> = ({ src, loop = false, height, width }) => {
  // video handle
  const video = useRef<HTMLVideoElement>(null);
  //store
  const { state, dispatch } = useStore();

  useLayoutEffect(() => {
    //disable default controls
    const { current: videoHandle } = video;
    if (videoHandle) {
      videoHandle.controls = false;
    }
  }, []);

  //set mislanious properties when player rendered
  useEffect(() => {
    const { current: videoHandle } = video;
    //set loop property
    dispatch(action.setLoop(loop));
    //set width
    if (videoHandle) {
      dispatch(action.setWidth(videoHandle.offsetWidth));
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

  //when duration change update new value
  function handleUpdateDuration() {
    const { current: videoHandle } = video;
    if (videoHandle) {
      const { duration } = videoHandle;
      dispatch(action.updateDuration(duration));
    }
  }

  //set loop
  useEffect(() => {
    const { current: videoHandle } = video;
    if (videoHandle) {
      const { loop } = videoHandle;
      videoHandle.loop = loop;
      dispatch(action.setLoop(loop));
    }
  }, [state.loop]);

  //subscribe elapsed time
  useEffect(() => {
    const { current: videoHandle } = video;
    const { elapsedTime } = state;
    if (videoHandle) {
      videoHandle.currentTime = elapsedTime;
    }
  }, [state.elapsedTime]);

  return (
    <video
      ref={video}
      onCanPlay={handleCanPlay}
      onLoadedMetadata={handleLoadedMetadata}
      onTimeUpdate={handleProgress}
      onEnded={handleEndPlay}
      onDurationChange={handleUpdateDuration}
      height={height}
      width={width}
      tabIndex={-1}
      className="player-video"
    >
      <source src={src}></source>
    </video>
  );
};
