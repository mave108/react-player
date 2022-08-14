import * as actionTypes from '../types';

export function canPlay(canPlay: boolean) {
  return {
    type: actionTypes.PLAY,
    canPlay,
  };
}

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
    type: actionTypes.LOADING,
    payload: progress,
  };
}
