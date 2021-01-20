export type SelectsRequestForm = {
  snsLink: string;
  content: string;
  reviewExpectingDate: string;
  selectsRequestAddress: SelectsRequestAddress;
  productId: number;
};

export type SelectsRequestAddress = {
  phone: string;
  name: string;
  postCode: string;
  baseAddress: string;
  detailAddress: string;
  message: string;
};
