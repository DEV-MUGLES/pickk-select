import { IBrand } from '..';
import {
  OrderState,
  ClaimStatus,
  Shipment,
  OrderItemShipment,
} from '@src/types';

export interface IOrderItem {
  brand: Pick<IBrand, 'id' | 'nameEng' | 'nameKor' | 'profileImageUrl'>;
  id: number;
  orderId: number;
  order: string;
  itemId: number;
  imageUrl: string;
  name: string;
  merchantUid: string;
  brandName: string;
  brandImageUrl: string;
  productId: number;
  productName: string;
  status: OrderState;
  claimStatus: ClaimStatus;
  paidAmount: number;
  quantity: number;
  createdAt: string;
  paidAt: string;
  placedAt: string;
  shippedAt: string;
  deliveredAt: string;
  cancelledAt: string;
  salePrice: number;
  isSubsDiscountable: boolean;
  subsDiscount: number;
  isRefundable: boolean;
  isExchangeable: boolean;
  subsDiscountAmount: number;
  subsDiscountRate: number;
  shipment?: OrderItemShipment;
}

export type IOrderItemExchangeDTO = {
  changeTo: number;
  shipment?: Shipment;
  reason: string;
};
