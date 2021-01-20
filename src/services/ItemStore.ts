import ReferStoreService from './ReferStore';
import ItemStoreModel from '../models/ItemStore';
import {
  storeType,
  StoreProduct,
  ReferStoreType,
  ReviewItemRefer,
  SelectedProduct,
} from '@src/types';

export const setItem = async (
  type: storeType,
  itemId: number,
  productId: number,
  quantity: number
) => {
  const itemStore = new ItemStoreModel();
  await itemStore.removeProduct(type, itemId, productId);
  await itemStore.addProduct(type, itemId, productId, quantity);
  itemStore.apply();
};

export const setItems = async (type: storeType, items: StoreProduct[]) => {
  const itemStore = new ItemStoreModel();
  for (let i = 0; i < items.length; ++i) {
    const { itemId, productId, quantity } = items[i];
    await itemStore.removeProduct(type, itemId, productId);
    await itemStore.addProduct(type, itemId, productId, quantity);
  }
  itemStore.apply();
};

export const getItemList = (type: storeType): StoreProduct[] => {
  try {
    const itemStore = new ItemStoreModel();
    return Object.values(itemStore[type])
      .reduce((acc, curr) => {
        return acc.concat(curr);
      }, [])
      .map((product) => {
        const reviewItemRefer = ReferStoreService.retrieve(
          ReferStoreType.ReviewItemRefer,
          product.itemId
        ) as ReviewItemRefer;
        const sharerRefer = ReferStoreService.retrieve(
          ReferStoreType.SharerRefer,
          product.itemId
        );

        const reviewItem = reviewItemRefer
          ? {
              id: reviewItemRefer.targetId,
              reviewType: reviewItemRefer.reviewType,
            }
          : null;
        const sharer = sharerRefer ? { sharerId: sharerRefer.targetId } : {};

        return { ...product, reviewItem, ...sharer };
      });
  } catch {
    return [];
  }
};

export const getStore = (type: storeType) => {
  const itemStore = new ItemStoreModel();
  return itemStore[type];
};

export const getData = async (type: storeType) => {
  const itemStore = new ItemStoreModel();
  return itemStore.getData(type);
};

export const removeItem = async (
  type: storeType,
  itemId: number,
  productId: number
) => {
  const itemStore = new ItemStoreModel();
  await itemStore.removeProduct(type, itemId, productId);
  itemStore.apply();
};

export const removeItems = async (
  type: storeType,
  items: Array<Pick<StoreProduct, 'itemId' | 'productId'>>
) => {
  const itemStore = new ItemStoreModel();
  for (let i = 0; i < items.length; ++i) {
    const { itemId, productId } = items[i];
    await itemStore.removeProduct(type, itemId, productId);
  }
  itemStore.apply();
};

const clear = (type: storeType) => {
  const itemStore = new ItemStoreModel();
  itemStore.clearByType(type);
  itemStore.apply();
};

const orderProducts = async (items: SelectedProduct[]) => {
  const itemStore = new ItemStoreModel();
  itemStore.clearByType('OrderSheet');
  for (let i = 0; i < items.length; ++i) {
    const { itemId, productId, quantity } = items[i];
    await itemStore.addProduct('OrderSheet', itemId, productId, quantity);
  }
  itemStore.apply();
};

const ItemStoreService = {
  setItem,
  setItems,
  getStore,
  getItemList,
  removeItem,
  removeItems,
  clear,
  orderProducts,
  getData,
};

export default ItemStoreService;
