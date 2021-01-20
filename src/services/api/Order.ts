import Router from 'next/router';

import ItemStoreService from '../ItemStore';
import base from './Api';
import { Address, RefundAccount, BuyerInfo, Shipment } from '@src/types';

const initiate = async () => {
  try {
    const orderItemList = ItemStoreService.getItemList('OrderSheet');

    if (orderItemList.length === 0) {
      throw new Error('주문서에 아이템이 없습니다.');
    }

    const order = await base(true)
      .post('/orders/initiate/', {
        items: orderItemList,
      })
      .then((res) => res.data);
    return order;
  } catch (e) {
    throw e;
  }
};

const validate = async (
  merchantUid: string,
  usedPoints: number,
  address: Address,
  refundAccount: RefundAccount,
  buyerInfo: BuyerInfo
) => {
  const body = {
    merchantUid,
    usedPoints,
    address,
    buyerInfo,
  };
  if (refundAccount) {
    body['refundAccount'] = refundAccount;
  }
  return base(true)
    .post('/orders/validate/', body)
    .then((res) => res.data)
    .catch((err) => {
      switch (err?.response?.status) {
        case 400:
          alert(`${err.response.data?.errorMessage}\n다시 확인해주세요.`);
          break;
        case 401:
        case 404:
          alert(`${err.response.data?.errorMessage}\n다시 접속해주세요.`);
          Router.back();
          break;
        default:
          alert(
            `${
              err.response.data?.errorMessage ||
              '결제 정보 구성에 실패했습니다.'
            }\n문의 메일(cs@mugles.com) 주시면 신속히 처리해드리겠습니다.\n이용에 불편을 드려 죄송합니다.`
          );
          Router.back();
          break;
      }
      throw err;
    });
};

const complete = async (impUid: string, merchantUid: string) => {
  const data = await base(true)
    .post('/orders/complete/', {
      impUid,
      merchantUid,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
};

const read = async (id: number) => {
  const data = await base(true)
    .get(`/orders/${id}/`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
};

const cancel = (orderItemIds: number[], reason: string) =>
  base(true)
    .post('/cancel/', {
      orderItemIds,
      reason,
    })
    .then(() => {
      Router.push('/complete/claim/cancel/');
    })
    .catch((err) => {
      console.log(err.response);
      alert(
        '문제가 발생했습니다. 문의 남겨주시면 신속히 처리해드리겠습니다. - ' +
          err.response.data.errorMessage
      );
      //Router.back();
    });

const refund = (orderItemIds: number[], shipment: Shipment, reason: string) =>
  base(true)
    .post('/refund/', {
      orderItemIds,
      ...(shipment || {}),
      reason,
    })
    .then(() => {
      Router.push('/complete/claim/refund/');
    })
    .catch((err) => {
      switch (err?.response?.status) {
        case 400:
        case 430:
          alert(`${err.response.data?.errorMessage}\n다시 확인해주세요.`);
          break;
        case 401:
          alert(`로그인 되어있지 않습니다.\n다시 접속해주세요.`);
          Router.back();
          break;
        case 403:
          alert(
            `${err.response.data?.errorMessage}\n다시 확인 후 시도해주세요.`
          );
          Router.back();
          break;
        case 404:
          alert(`주문을 찾을 수 없습니다.\n다시 확인 후 시도해주세요.`);
          Router.back();
          break;
        default:
          alert(
            `${
              err.response.data?.errorMessage || '반품 신청에 실패했습니다.'
            }\n고객센터(:phone:070-8838-1445)로 전화나 문자 남겨주시면 신속한 처리 도와드리겠습니다.\n이용에 불편을 드려 죄송합니다.`
          );
          Router.back();
          break;
      }
      throw err;
    });

const OrderService = {
  initiate,
  validate,
  complete,
  read,
  cancel,
  refund,
};

export default OrderService;
