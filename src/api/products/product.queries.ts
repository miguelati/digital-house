import {useQuery, UseQueryOptions} from 'react-query';
import {getProducts} from './product.api';
import {ApiFetchNames} from '../client';

export const useProducts = (config?: UseQueryOptions<ApiDataProducts[]>) =>
  useQuery<ApiDataProducts[]>(
    [ApiFetchNames.products],
    async () => await getProducts(),
    config,
  );
