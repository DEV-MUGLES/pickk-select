import { IReview } from '..';
import { ThumbnailType } from '@src/types';
import { IPostItem, IPostItemInputDTO } from './IPostItem';

export interface IPost extends IReview {
  postItems: Omit<IPostItem, 'post'>[];
  youtubeVideoId?: string;
  youtubeVideoDuration?: number;
}

export type IPostInputDTO = Pick<IPost, 'title' | 'isVisible'> & {
  postItems: IPostItemInputDTO[];
  content?: string;
  youtubeVideoId?: string;
};
