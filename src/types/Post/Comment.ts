import { IComment, IUserReadDTO } from '@src/interfaces';

export type Reply = Pick<
  IComment,
  'id' | 'user' | 'content' | 'createdAt' | 'updatedAt'
> & {
  mentionedUser: IUserReadDTO;
};
