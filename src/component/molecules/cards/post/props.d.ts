import { IPost, IPostItem } from '@src/interfaces';

export type PostCardProps = IPost & {
  youtubeVideoId?: string;
  postItems?: IPostItem[];
  style?: React.CSSProperties;
};
