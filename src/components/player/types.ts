export interface PlayerProps {
  id: string;
  src: string;
  height: number;
  width: number;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  preload?: PreloadProps;
  crossorigin?: boolean;
}

export enum PreloadProps {
  NONE = 'none',
  METADATA = 'metadata',
  AUTO = 'auto',
}
