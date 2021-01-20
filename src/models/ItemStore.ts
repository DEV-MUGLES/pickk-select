import { Cookies } from 'react-cookie';

import base from '@src/services/api/Api';
import { setCookie } from '@src/lib/utils';
import {
  ItemStore,
  CartStore,
  OrderSheetStore,
  storeType,
} from '@src/types/ItemStore';
import { ItemService } from '@src/services';

const cookies = new Cookies();

export default class ItemStoreModel implements ItemStore {
  Cart: import('../types/ItemStore').CartStore;
  OrderSheet: import('../types/ItemStore').OrderSheetStore;

  static getStoreByType = (type: storeType) => {
    const itemStore = cookies.get('ItemStore');
    if (!itemStore || itemStore[type] === undefined) return {};
    return itemStore[type];
  };

  constructor() {
    this.Cart = ItemStoreModel.getStoreByType('Cart');
    this.OrderSheet = ItemStoreModel.getStoreByType('OrderSheet');
  }

  apply = () => {
    setCookie('ItemStore', this);
  };

  clearByType = (type: storeType) => {
    this[type] = {};
  };

  addProduct = async (
    type: storeType,
    itemId: number,
    productId: number,
    quantity: number
  ) => {
    const itemData = { itemId, productId, quantity };
    const { brand } = await ItemService.read(itemId);

    const cartValue = { ...this[type] };
    cartValue[brand.id] = (cartValue[brand.id] || []).concat(itemData);
    this[type] = cartValue;
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  removeProduct = async (
    type: storeType,
    itemId: number,
    productId: number
  ) => {
    const itemFetchData = await ItemService.read(itemId);
    const itemBrand = itemFetchData.brand.id;

    const previousCartValue: CartStore | OrderSheetStore = this[type];
    const cartValue = { ...previousCartValue };

    const itemIndex = (previousCartValue[itemBrand] || []).findIndex(
      (item) => item.productId === productId
    );
    if (itemIndex !== -1) {
      cartValue[itemBrand] = [
        ...cartValue[itemBrand].slice(0, itemIndex),
        ...cartValue[itemBrand].slice(
          itemIndex + 1,
          cartValue[itemBrand].length
        ),
      ];
      if (cartValue[itemBrand].length === 0) delete cartValue[itemBrand];
      this[type] = cartValue;
    }
  };

  getData = async (type: storeType) =>
    Promise.all(
      Object.keys(this[type]).map(
        (key) =>
          new Promise(async (resolve) => {
            const brandInfo = await base()
              .get(`/brands/${key}`)
              .then((res) => res.data);
            const itemInfoList = await Promise.all(
              this[type][key].map(
                (item) =>
                  new Promise(async (resolve) => {
                    const itemInfo = await ItemService.read(item.itemId);
                    resolve({
                      ...itemInfo,
                      ...item,
                    });
                  })
              )
            );
            brandInfo.items = itemInfoList;
            resolve(brandInfo);
          })
      )
    );
}
