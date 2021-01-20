export type NotificationTargetData = {
  id: number;
  postId?: number;
  lookId?: number;
};

export type NotificationAdditionalInfo = {
  actor: string;
  target: string;
  originalTarget: string;
};

export enum NotificationModel {
  Look = 'LOOK',
  Post = 'POST',
  Comment = 'COMMENT',
  User = 'USER',
}

export enum NotificationActionType {
  Follow = 'follow',
  Like = 'like',
  Comment = 'comment',
  Reply = 'reply',
  Review = 'review',
}
