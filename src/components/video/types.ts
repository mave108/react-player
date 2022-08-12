export enum PreloadProps {
  NONE = 'none',
  METADATA = 'metadata',
  AUTO = 'auto',
}

export interface VideoProps {
  id: string;
  src: string;
  poster: string;
  autoplay: boolean;
  height: number;
  width: number;
  loop: boolean;
  muted: boolean;
  preload: PreloadProps;
}
