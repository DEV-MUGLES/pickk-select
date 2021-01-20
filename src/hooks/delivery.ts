import axios from 'axios';
import { useState, useEffect } from 'react';

import { DeliveryTrack } from '@src/types/Delivery';

const SERVER_URL = 'https://delivery-track.pickk.one/api';

export const useDeliveryTrack = (carrierId: string, trackingCode: string) => {
  const [track, setTrack] = useState<DeliveryTrack>(null);
  const [error, setError] = useState(null);

  const fetchDelivery = async (carrierId: string, trackingCode: string) => {
    try {
      const { data: result } = await axios(
        SERVER_URL + `/carriers/${carrierId}/tracks/${trackingCode}`
      );
      setTrack(result);
      setError(null);
    } catch (e) {
      setTrack(null);
      setError(e);
    }
  };

  useEffect(() => {
    if (!carrierId || !trackingCode) {
      return;
    }

    fetchDelivery(carrierId, trackingCode);
  }, [carrierId, trackingCode]);

  return { data: track, error };
};
