import ReferStoreModel from '@src/models/ReferStore';
import { ReferPriority, ReferStoreType, ReviewType } from '@src/types';

export const list = (type: ReferStoreType) => {
  const referStore = new ReferStoreModel();
  return referStore[type];
};

export const retrieve = (type: ReferStoreType, itemId: number) => {
  const referStore = new ReferStoreModel();
  return referStore[type]
    .filter((refer) => refer.itemId === itemId)
    .sort((a, b) => a.priority.localeCompare(b.priority))[0];
};

export const add = (
  type: ReferStoreType,
  itemId: number,
  targetId: number,
  priority: ReferPriority,
  additionalInfo: { reviewType?: ReviewType } = {}
) => {
  const referStore = new ReferStoreModel();
  referStore.add(type, itemId, targetId, priority, additionalInfo);
  referStore.apply();
};

const ReferStoreService = {
  list,
  retrieve,
  add,
};

export default ReferStoreService;
