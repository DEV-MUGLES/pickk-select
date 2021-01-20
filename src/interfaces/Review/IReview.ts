import { IUserReadDTO } from '../User/IUser';

export interface IReview {
  id: number;
  viewCount: number;
  followersCount: number;
  commentsCount: number;
  title: string;
  content?: string;
  isVisible: boolean;
  createdAt: string;
  updatedAt: string;
  user: IUserReadDTO;
}
