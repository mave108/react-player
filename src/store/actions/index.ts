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

export function togglePlay(isPlaying: boolean) {
  return {
    type: actionTypes.TOGGLE_PLAY,
    payload: isPlaying,
  };
}
export function updateElapsedTime(time: number) {
  return {
    type: actionTypes.UPDATE_ELAPSED_TIME,
    payload: time,
  };
}

export function setLoop(loop: boolean) {
  return {
    type: actionTypes.SET_LOOP,
    payload: loop,
  };
}

export function setWidth(width: number) {
  return {
    type: actionTypes.SET_LOOP,
    payload: width,
  };
}
