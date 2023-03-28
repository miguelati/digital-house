import {View} from 'react-native';
import React from 'react';
import {Label} from '~/components/atoms/label';
import {style} from './WelcomeView.styles';

const WelcomeView = ({user}: Components.WelcomeViewProps) => {
  return (
    <View style={style.container}>
      <Label variant="titleBold">Bienvenido de vuelta!</Label>
      <Label variant="titleThin">{user}</Label>
    </View>
  );
};

export {WelcomeView};
