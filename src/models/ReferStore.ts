import { Cookies } from 'react-cookie';
import moment from 'moment';

import { setCookie } from '@src/lib/utils';
import {
  ReferStore,
  ReviewItemRefer,
  SharerRefer,
  ReferStoreType,
  ReferPriority,
  ReviewType,
} from '@src/types';

const cookies = new Cookies();

export default class ReferStoreModel implements ReferStore {
  ReviewItemRefer: ReferStore['ReviewItemRefer'];
  SharerRefer: ReferStore['SharerRefer'];

  static getStoreByType = (type: ReferStoreType) => {
    const refStore = cookies.get('ReferStore') as ReferStore;
    if (!refStore || refStore[type] === undefined) return [];
    return refStore[type].filter((refer) =>
      moment().isBefore(refer.expireExpectAt)
    );
  };

  constructor() {
    const { ReviewItemRefer, SharerRefer } = ReferStoreType;
    this.ReviewItemRefer = ReferStoreModel.getStoreByType(
      ReviewItemRefer
    ) as ReviewItemRefer[];
    this.SharerRefer = ReferStoreModel.getStoreByType(SharerRefer);
  }

  apply = () => {
    setCookie('ReferStore', this);
  };

  clearByType = (type: ReferStoreType) => {
    this[type] = [];
  };

  add = (
    type: ReferStoreType,
    itemId: number,
    targetId: number,
    priority: ReferPriority,
    additionalInfo: { reviewType?: ReviewType } = {}
  ) => {
    const expireExpectAt = moment().add(3, 'day').toString();

    this[type] = this[type]
      .filter(
        (refer) => !(refer.itemId === itemId && refer.priority === priority)
      )
      .concat({
        priority,
        itemId,
        targetId,
        expireExpectAt,
        ...additionalInfo,
      }) as ReviewItemRefer[] & SharerRefer[];
  };
}
