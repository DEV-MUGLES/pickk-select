import { useState, useEffect } from 'react';
import Router from 'next/router';

import ItemStoreService from '@src/services/ItemStore';
import OrderService from '@src/services/api/Order';
import { OrderSheetStore } from '@src/types/ItemStore';
import {
  Order,
  Address,
  OrderSheetPrice,
  BuyerInfo,
  RefundAccount,
} from '@src/types';

export default class OrderSheetModel {
  public store: OrderSheetStore;
  public info: { brands: any[] };

  orderId: number;
  merchantUid: string;
  order: Order;
  maxPoint: number;
  recentAddress: Address;
  recentBuyerInfo: BuyerInfo;
  paidPoint: number;
  isFirstOrder: boolean;
  recentPayMethod: string;
  recentRefundAccountInfo: RefundAccount;

  constructor() {
    this.store = ItemStoreService.getStore('OrderSheet');
    this.paidPoint = 0;
    this.info = { brands: [] };
  }

  static useOrderSheet = () => {
    const [orderSheet, setOrderSheet] = useState<OrderSheetModel>(null);

    useEffect(() => {
      OrderSheetModel.create().then((res) => setOrderSheet(res));
    }, []);

    return orderSheet;
  };

  async initData() {
    try {
      const {
        orderId,
        merchantUid,
        order,
        maxPoint,
        recentAddress,
        recentBuyerInfo,
        recentPayMethod,
        recentRefundAccountInfo,
      } = await OrderService.initiate();

      this.orderId = orderId;
      this.merchantUid = merchantUid;
      this.order = order;
      this.maxPoint = maxPoint;
      this.recentAddress = recentAddress;
      this.recentBuyerInfo = recentBuyerInfo;
      this.isFirstOrder = true;
      this.recentPayMethod = recentPayMethod;
      this.recentRefundAccountInfo = recentRefundAccountInfo;
    } catch (e) {
      ItemStoreService.clear('OrderSheet');
      alert(
        e?.response?.data?.errorMessage || '결제 정보 구성에 실패했습니다.'
      );
      Router.back();
      throw e;
    }
  }

  static async create() {
    const o = new OrderSheetModel();
    await o.initData();
    return Promise.resolve(o);
  }

  setPaidPoint = (paidPoint) => {
    this.paidPoint = paidPoint;
  };

  getPrice = (): OrderSheetPrice => {
    const totalItemPrice = this.order.reduce((totalPrice, brand) => {
      return (
        totalPrice +
        brand.orderItems.reduce((brandPrice, item) => {
          return brandPrice + item.salePrice * item.quantity;
        }, 0)
      );
    }, 0);

    const totalShippingFee = this.order.reduce(
      (totalFee, brand) => totalFee + brand.shippingFee,
      0
    );

    const totalSubscribeDiscountAmount = this.order.reduce(
      (totalAmount, brand) => {
        return (
          totalAmount +
          brand.orderItems.reduce(
            (brandAmount, item) => brandAmount + item.subsDiscountAmount,
            0
          )
        );
      },
      0
    );

    return {
      totalItemPrice,
      totalShippingFee,
      totalPaymentPrice:
        totalItemPrice + totalShippingFee - totalSubscribeDiscountAmount,
      totalSubscribeDiscountPrice: totalSubscribeDiscountAmount,
      paidPoint: this.paidPoint,
    };
  };
}
