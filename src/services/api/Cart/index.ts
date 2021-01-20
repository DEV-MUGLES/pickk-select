import axios from 'axios';
import Router from 'next/router';

import { initiateConfig } from './config';

import ItemStoreService from '../../ItemStore';
import { Cart } from '@src/types';

const initiate = async (): Promise<Cart> => {
  try {
    const items = ItemStoreService.getItemList('Cart');
    const cart = axios(initiateConfig(items)).then((res) => res.data.cart);
    return cart;
  } catch (err) {
    alert('일시적인 오류입니다. 이용에 불편을 드려 죄송합니다. - ' + err);
    ItemStoreService.clear('Cart');
    Router.back();
  }
};

const CartService = {
  initiate,
};

export default CartService;
