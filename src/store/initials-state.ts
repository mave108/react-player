export interface InitialStateTypes {
  muted: boolean;
  autoPlay: boolean;
  canPlay: boolean;
  loading: boolean;
  duration: number;
  isPlaying: boolean;
  elapsedTime: number;
}
export const initialState: InitialStateTypes = {
  muted: false,
  autoPlay: false,
  canPlay: false,
  loading: false,
  duration: 0,
  isPlaying: false,
  elapsedTime: 0,
};
