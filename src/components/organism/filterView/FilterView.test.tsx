import React from 'react';
import {render} from '@testing-library/react-native';
import {FilterView} from './FilterView';

describe('COMPONENTS::WELCOME_VIEW', () => {
  it('renders correctly without filter', () => {
    const {getByText} = render(
      <FilterView isFiltered={false} onPress={() => {}} />,
    );
    expect(getByText('Ganados')).toBeTruthy();
    expect(getByText('Canjeados')).toBeTruthy();
  });
  it('renders correctly with filter', () => {
    const {getByText} = render(
      <FilterView isFiltered={true} onPress={() => {}} />,
    );
    expect(getByText('Todos')).toBeTruthy();
  });
});
