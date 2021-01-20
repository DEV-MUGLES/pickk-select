import Router from 'next/router';

import OrderService from './Order';
import { constructUrl, getDateTimeStrings } from '@src/lib/utils';
import {
  Address,
  BuyerInfo,
  RefundAccount,
  Methods,
  Buyer,
  PayMethod,
} from '@src/types';

declare global {
  interface Window {
    IMP: any;
  }
}

const request = async (
  merchantUid: string,
  payMethod: PayMethod,
  amount: number,
  paidPoint: number,
  name: string,
  address: Address,
  refundAccount: RefundAccount,
  buyerInfo: BuyerInfo
) => {
  /* 1. 가맹점 식별하기 */
  try {
    await OrderService.validate(
      merchantUid,
      paidPoint,
      address,
      refundAccount,
      buyerInfo
    );
  } catch (err) {
    return;
  }

  const { IMP } = window;
  IMP.init(process.env.IAMPORT_APP_ID);

  const { year, month, day, hours, minutes } = getDateTimeStrings(
    Date.now() + 1000 * 60 * 60 * 3
  );
  const vbankDueString = year + month + day + hours + minutes;

  /* 2. 결제 데이터 정의하기 */
  const data = {
    pg: payMethod.pg, // PG사
    pay_method: payMethod.payMethod, // 결제수단
    merchant_uid: merchantUid, // 주문번호
    amount: amount - paidPoint, // 결제금액
    name, // 주문명
    buyer_name: buyerInfo.name, // 구매자 이름
    buyer_tel: buyerInfo.phone, // 구매자 전화번호
    buyer_email: buyerInfo.email, // 구매자 이메일
    buyer_addr: address.baseAddress + ' ' + address.detailAddress, // 구매자 주소
    buyer_postcode: address.postCode, // 구매자 우편번호
    vbank_due:
      payMethod.payMethod === Methods.Vbank ? vbankDueString : undefined,
    m_redirect_url: process.env.URL + 'orders/redirect',
  };

  /* 4. 결제 창 호출하기 */
  IMP.request_pay(data, callback);
};

const callback = async (response) => {
  const { success, imp_uid, merchant_uid, error_msg } = response;

  if (success) {
    Router.push(
      constructUrl('/orders/redirect', {
        imp_uid,
        merchant_uid,
      })
    );
  } else {
    alert(`결제 실패: ${error_msg} - ` + merchant_uid);
  }
};

const requestDemo = (
  pay_method: Methods,
  amount: number,
  name: string,
  buyer: Buyer,
  demoId
) => {
  /* 1. 가맹점 식별하기 */
  const { IMP } = window;
  IMP.init(process.env.IAMPORT_APP_ID);

  /* 2. 결제 데이터 정의하기 */
  const data = {
    pg: 'html5_inicis', // PG사
    pay_method, // 결제수단
    merchant_uid: `${new Date().getTime()}`, // 주문번호
    amount, // 결제금액
    name, // 주문명
    buyer_name: buyer.name, // 구매자 이름
    buyer_tel: buyer.tel, // 구매자 전화번호
    buyer_email: buyer.email, // 구매자 이메일
    buyer_addr: buyer.addr, // 구매자 주소
    buyer_postcode: buyer.postcode, // 구매자 우편번호
  };

  /* 4. 결제 창 호출하기 */
  IMP.request_pay(data, (res) => callbackDemo(res, demoId));
};

const callbackDemo = async (response, demoId) => {
  const {
    success,
    imp_uid,
    pay_method,
    merchant_uid,
    error_msg,
    buyer_name,
    buyer_tel,
    buyer_postcode,
    buyer_addr,
    paid_at,
  } = response;

  if (success) {
    Router.push(
      constructUrl('/order/complete', {
        itemId: demoId,
        ...response,
      })
    );
  } else {
    alert(`결제 실패: ${error_msg} - ` + merchant_uid);
  }
};

const PaymentService = {
  requestDemo,
  request,
};

export default PaymentService;
