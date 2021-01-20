import { IReviewItem, IReviewItemInputDTO } from '..';

export interface IPostItem extends IReviewItem {
  post: number;
  youtubeStartSeconds?: number;
  youtubeEndSeconds?: number;
  youtubeScreenshot: string;
}

export type IPostItemInputDTO = IReviewItemInputDTO &
  Pick<IPostItem, 'youtubeStartSeconds' | 'youtubeEndSeconds'>;
