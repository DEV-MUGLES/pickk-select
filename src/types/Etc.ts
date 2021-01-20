import { ItemMinorTypes } from './Item';

export type HotCategory = {
  id: number;
  itemMinorType: ItemMinorTypes;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type HomeModalContent = {
  id: number;
  order: number;
  imageUrl: string;
  isWeb: boolean;
  href: string;
  screenName: string;
  screenId?: number;
  createdAt: string;
  updatedAt: string;
};
