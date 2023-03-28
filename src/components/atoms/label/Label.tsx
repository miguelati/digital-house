import {Text} from 'react-native';
import React from 'react';
import {Fonts} from '~/themes';

const Label = ({
  children,
  variant = 'headerTitle',
  style,
  ...props
}: Components.LabelProps) => {
  return (
    <Text style={[style, Fonts[variant]]} {...props}>
      {children}
    </Text>
  );
};

export {Label};
