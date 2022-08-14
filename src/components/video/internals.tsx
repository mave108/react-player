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

  useEffect(() => {
    console.log('didUpadate', state);
  }, [state]);

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

  return (
    <video ref={video} onCanPlay={handleCanPlay} onLoadedMetadata={handleLoadedMetadata}>
      <source src={src}></source>
    </video>
  );
};
