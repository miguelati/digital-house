import {AxiosResponse} from 'axios';
import client from '../client';

export const getProducts = async (): Promise<ApiDataProducts[]> => {
  const onSuccess = (response: AxiosResponse): ApiDataProducts[] => {
    const {data} = response;
    return data;
  };
  const onError = (error: Error) => {
    return Promise.reject(error);
  };
  return client.get('/products').then(onSuccess).catch(onError);
};
