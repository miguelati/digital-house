import {View} from 'react-native';
import React from 'react';
import {Label} from '~/components/atoms/label';
import {style} from './TotalPointsView.styles';

const TotalPointsView = ({points, month}: Components.TotalPointsViewProps) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.subTitleContainer}>
        <Label variant="subTitle">TUS PUNTOS</Label>
      </View>
      <View style={style.pointsContainer}>
        <View style={style.container}>
          <Label style={style.month} variant="monthPoints">
            {month}
          </Label>
          <Label variant="bigPoints">{`${points.toLocaleString()} pts`}</Label>
        </View>
      </View>
    </View>
  );
};

export {TotalPointsView};
