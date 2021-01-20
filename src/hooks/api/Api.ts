import { useState, useEffect } from 'react';
import { AxiosQueryResponse } from '@src/types';

const useAxiosQuery = <T>(query) => (
  parameters: any[]
): AxiosQueryResponse<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<T>(null);
  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const data = await query(...parameters);
        setData(data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, parameters);

  return { loading, error, data };
};

export const useOffsetQuery = <T>(query) => (
  parameters: any[]
): AxiosQueryResponse<T[]> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<T[]>(null);
  const [count, setCount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const { count, results } = await query(...parameters);
        setData(results);
        setCount(count);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, parameters);

  const fetchMore = async (option) => {
    if (loading || data.length === count) {
      return;
    }
    setError(false);
    setLoading(true);
    try {
      const { results: fetchMoreResult } = await query(option.params);
      if (fetchMoreResult) {
        setData(data.concat(fetchMoreResult));
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return { loading, error, data, fetchMore, count };
};

export default useAxiosQuery;
