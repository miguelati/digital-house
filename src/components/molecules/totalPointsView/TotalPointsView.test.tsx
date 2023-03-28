import React from 'react';
import {render} from '@testing-library/react-native';
import {TotalPointsView} from '~/components/molecules/totalPointsView';

describe('COMPONENTS::TOTAL_POINTS_VIEW', () => {
  it('renders correctly', () => {
    const month = 'Diciembre';
    const points = 3000;
    const {getByText} = render(
      <TotalPointsView month={month} points={points} />,
    );
    expect(getByText(month)).toBeTruthy();
    expect(getByText(`${points.toLocaleString()} pts`)).toBeTruthy();
  });
});
