import React from 'react';
import {render} from '@testing-library/react-native';
import {HeaderTitle} from './HeaderTitle';

describe('COMPONENTS::HEADER_TITLE', () => {
  it('renders correctly', () => {
    const title = 'Producto';
    const {getByText} = render(<HeaderTitle title={title} />);
    expect(getByText(title)).toBeTruthy();
  });
});
