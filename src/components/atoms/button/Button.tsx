import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Label} from '~/components/atoms/label';
import {style} from './Button.styles';

const Button = ({title, ...props}: Components.ButtonProps) => {
  return (
    <TouchableOpacity style={style.container} {...props}>
      <Label variant="buttonText">{title}</Label>
    </TouchableOpacity>
  );
};

export {Button};
