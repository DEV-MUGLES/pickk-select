export type DeliveryCarrier = {
  id: string;
  name: string;
  tel: string;
};

export type DeliveryPerson = {
  name: string;
  time: string;
};

export type DeliveryState = {
  id: string;
  text: string;
};

export type DeliveryProgress = {
  time: string;
  location: {
    name: string;
  };
  status: {
    id: string;
    text: string;
  };
  description: string;
};

export type DeliveryTrack = {
  carrier: DeliveryCarrier;
  from: DeliveryPerson;
  to: DeliveryPerson;
  state: DeliveryState;
  progresses: DeliveryProgress[];
};
