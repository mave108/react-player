import { initialState, InitialStateTypes } from '../initials-state';
import * as actionTypes from '../types';

export function playerReducer(state = initialState, action: { type: any; payload: any }) {
  switch (action.type) {
    case actionTypes.LOADING:
      return { ...state, loading: action.payload };
    case actionTypes.SET_DURATION:
      return { ...state, duration: action.payload };
    case actionTypes.TOGGLE_PLAY:
      return { ...state, isPlaying: action.payload };
    case actionTypes.UPDATE_ELAPSED_TIME:
      return { ...state, elapsedTime: action.payload };
    default:
      return state;
  }
}
