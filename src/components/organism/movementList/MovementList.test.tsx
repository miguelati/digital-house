import React from 'react';
import {render} from '@testing-library/react-native';
import {MovementList} from './MovementList';
import {dateFormatShort} from '~/utils';

describe('COMPONENTS::WELCOME_VIEW', () => {
  it('renders correctly', () => {
    const data = [
      {
        product: 'Nombre del Producto',
        createdAt: '2022-12-09T06:34:25.607Z',
        image: 'https://loremflickr.com/640/480/transport',
        is_redemption: false,
        points: 100,
        id: '9',
      },
    ];
    const {getByText} = render(
      <MovementList movements={data} onPress={() => {}} />,
    );
    expect(getByText(data[0].product)).toBeTruthy();
    expect(getByText(dateFormatShort(data[0].createdAt))).toBeTruthy();
  });
});
