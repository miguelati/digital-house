import React from 'react';
import {render} from '@testing-library/react-native';
import {MovementRow} from './MovementRow';
import {dateFormatShort} from '~/utils';

describe('COMPONENTS::MOVEMENT_ROW', () => {
  it('renders correctly', () => {
    const product = 'Nombre del producto';
    const createdAt = '2022-12-09T06:34:25.607Z';
    const points = 100;
    const is_redemption = false;
    const image = 'https://loremflickr.com/640/480/transport';
    const id = '9';
    const {getByText} = render(
      <MovementRow
        movement={{product, createdAt, points, is_redemption, image, id}}
        onPress={() => {}}
      />,
    );
    expect(getByText(product)).toBeTruthy();
    expect(getByText(dateFormatShort(createdAt))).toBeTruthy();
    expect(getByText(is_redemption ? '-' : '+')).toBeTruthy();
    expect(getByText(points.toLocaleString())).toBeTruthy();
  });
});
