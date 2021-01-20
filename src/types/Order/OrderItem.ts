import { IOrderItem } from '@src/interfaces';

export type OrderItemList = {
  count: number;
  next: string;
  previous: string;
  results: IOrderItem[];
};

export type Shipment = {
  courier: string;
  trackingCode: string;
};

export type OrderItemShipment = {
  carrierId: string;
  trackId: string;
};

export type PackagePrice = {
  shippingFee: number;
  totalPaidAmount: number;
  claimedAmount: number;
};

export enum OrderItemAction {
  Cancel = '구매 취소',
  Inquire = '문의 하기',
  Delivery = '배송 조회',
  Confirm = '구매 확정',
  Refund = '반품 신청',
  Exchange = '교환 신청',
}
