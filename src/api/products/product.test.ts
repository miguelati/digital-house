import {renderHook} from '@testing-library/react-native';
import {useProducts} from './product.queries';

describe('API::PRODUCTS', () => {
  describe('hook useProducts', () => {
    it('Get all products', () => {
      const {result} = renderHook(() => useProducts());
      expect(result.current.data?.length).toEqual(0);
    });
  });
});
