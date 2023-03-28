import React from 'react';
import {render} from '@testing-library/react-native';
import {Label} from '~/components/atoms/label';

describe('COMPONENTS::LABEL', () => {
  it('renders correctly', () => {
    const {getByText} = render(<Label>Label</Label>);
    expect(getByText('Label')).toBeTruthy();
  });
});
