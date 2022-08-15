import * as actionTypes from '../types';

export function setLoading(loading: boolean) {
  return {
    type: actionTypes.LOADING,
    payload: loading,
  };
}

export function updateDuration(duration: number) {
  return {
    type: actionTypes.SET_DURATION,
    payload: duration,
  };
}

export function updateProgress(progress: boolean) {
  return {
    type: actionTypes.SET_PROGRESS,
    payload: progress,
  };
}

export function togglePlay(isPlaying: boolean) {
  console.log('action', isPlaying);
  return {
    type: actionTypes.TOGGLE_PLAY,
    payload: isPlaying,
  };
}
