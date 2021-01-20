import { ReviewType } from './Post';

export enum ReferStoreType {
  ReviewItemRefer = 'ReviewItemRefer',
  SharerRefer = 'SharerRefer',
}

export enum ReferPriority {
  High = 'HIGH',
  Low = 'LOW',
}

type BaseRefer = {
  priority: ReferPriority;
  itemId: number;
  targetId: number;
  expireExpectAt: string;
};

export type ReviewItemRefer = BaseRefer & {
  reviewType: ReviewType;
};

export type SharerRefer = BaseRefer;

export type ReferStore = {
  ReviewItemRefer: ReviewItemRefer[];
  SharerRefer: SharerRefer[];
};
