import {View} from 'react-native';
import React from 'react';
import {Label} from '~/components/atoms/label';
import {style} from './HeaderTitle.styles';

const HeaderTitle = ({title}: Components.HeaderTitleProps) => {
  return (
    <View style={style.container}>
      <Label style={style.title} variant="headerTitle">
        {title}
      </Label>
    </View>
  );
};

export {HeaderTitle};
