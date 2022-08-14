import { PLAY } from '../types';

export function handlePlay(videoProps) {
  return {
    type: PLAY,
    videoProps,
  };
}
