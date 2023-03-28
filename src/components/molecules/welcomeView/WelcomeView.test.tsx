import React from 'react';
import {render} from '@testing-library/react-native';
import {WelcomeView} from './WelcomeView';

describe('COMPONENTS::WELCOME_VIEW', () => {
  it('renders correctly', () => {
    const user = 'Ruben Rodriguez';
    const {getByText} = render(<WelcomeView user={user} />);
    expect(getByText('Bienvenido de vuelta!')).toBeTruthy();
    expect(getByText(user)).toBeTruthy();
  });
});
