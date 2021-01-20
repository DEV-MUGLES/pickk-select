import { IPost } from '@src/interfaces';

export enum ReviewType {
  Post = 'POST',
  Look = 'LOOK',
}

export enum ThumbnailType {
  Youtube = 'YOUTUBE',
  Image = 'IMAGE',
}

export enum _StyleTag {
  Design = 'DESIGN',
  Price = 'PRICE',
  Texture = 'TEXTURE',
  Individuality = 'INDIVIDUALITY',
}

export type LookImage = {
  id: number;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type RecommendationPosts = {
  posts: IPost[];
  order: number;
  title: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};
