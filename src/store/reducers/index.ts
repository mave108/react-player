import { initialState, InitialStateTypes } from '../initials-state';
import * as actionTypes from '../types';

export function playerReducer(state = initialState, action: { type: any; payload: any }) {
  switch (action.type) {
    case actionTypes.LOADING:
      return { ...state, loading: action.payload };
    case actionTypes.SET_DURATION:
      return { ...state, duration: action.payload };
    default:
      return state;
  }
}
