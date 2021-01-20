export type PointsPreview = {
  generalPoint: number;
  rewardPoint: number;
  usableGeneralPoint: number;
  usableRewardPoint: number;
  totalPoint: number;
  thisMonth: number;
};

export enum PointsWithdrawalStatus {
  Requested = 'REQUESTED',
  Inspecting = 'INSPECTING',
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
  Cancelled = 'CANCELLED',
}
