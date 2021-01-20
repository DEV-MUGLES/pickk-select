import {
  NotificationTargetData,
  NotificationAdditionalInfo,
  NotificationModel,
  NotificationActionType,
} from '@src/types';

export interface INotification {
  id: number;
  targetData: NotificationTargetData;
  additionalInfo: NotificationAdditionalInfo;
  title: string;
  body: string;
  model: NotificationModel;
  type: string;
  imageUrl: string;
  isChecked: boolean;
  actionType: NotificationActionType;
  count: number;
  isMergeCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}
