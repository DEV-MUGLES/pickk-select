import { ProviderType } from '@src/types';

export interface IUser {
  id: number;
  profileImageUrl: string;
  providerType: ProviderType;
  providerId: string;
  age?: number;
  height?: number;
  weight?: number;
  phoneNum?: string;
  channelTitleImageUrl?: string;
  channelDescription?: string;
  youtubeUrl?: string;
  naverBlogUrl?: string;
  instagramUrl?: string;
  reviewCount?: number;
  followersCount: number;
  totalViewCount: number;
  email: string;
  name: string;
  isActive: true;
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
  isLoggedIn: boolean;
  point: number;
  styleTagSegment?: number;
}

export type IUserInputDTO = Pick<
  IUser,
  | 'name'
  | 'providerType'
  | 'providerId'
  | 'age'
  | 'height'
  | 'weight'
  | 'phoneNum'
  | 'channelTitleImageUrl'
  | 'channelDescription'
  | 'email'
  | 'name'
  | 'styleTagSegment'
> & {
  profileImageUrl?: string;
};

export const userInputDTORequiredKeys = [
  'providerType',
  'providerId',
  'email',
  'name',
  'phoneNum',
];

export type IUserReadDTO = Pick<
  IUser,
  | 'id'
  | 'name'
  | 'profileImageUrl'
  | 'channelTitleImageUrl'
  | 'channelDescription'
  | 'followersCount'
  | 'totalViewCount'
  | 'height'
  | 'weight'
  | 'reviewCount'
  | 'youtubeUrl'
  | 'instagramUrl'
  | 'naverBlogUrl'
>;
