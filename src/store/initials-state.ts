export interface InitialStateTypes {
  muted: boolean;
  autoPlay: boolean;
  canPlay: boolean;
  loading: boolean;
  duration: number;
  progress: number;
}
export const initialState: InitialStateTypes = {
  muted: false,
  autoPlay: false,
  canPlay: false,
  loading: false,
  duration: 0,
  progress: 0,
};
