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
    <Text {...props} style={[style, Fonts[variant]]}>
      {children}
    </Text>
  );
};

export {Label};
