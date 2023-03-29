import React from 'react';
import {render} from '@testing-library/react-native';
import {DetailsView} from './DetailsView';
import {dateFormatLong} from '~/utils';

describe('COMPONENTS::DETAILS_VIEW', () => {
  it('renders correctly without filter', () => {
    const createdAt = '2022-12-09T06:34:25.607Z';
    const points = 100;
    const image = 'https://loremflickr.com/640/480/transport';
    const {getByText} = render(
      <DetailsView
        image={image}
        createdAt={createdAt}
        points={points}
        onAccept={() => {}}
      />,
    );
    expect(getByText(dateFormatLong(createdAt))).toBeTruthy();
    expect(getByText(`${points.toLocaleString()} puntos`)).toBeTruthy();
  });
});
