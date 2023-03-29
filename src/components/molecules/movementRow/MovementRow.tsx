import {Image, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {Label} from '~/components/atoms/label';
import {dateFormatShort} from '~/utils';
import Arrow from '~/assets/svg/arrow.svg';
import {style} from './MovementRow.styles';

const MovementRow = memo(({movement, onPress}: Components.MovementRowProps) => {
  const {product, image, is_redemption, points, createdAt} = movement;
  const onPressHandler = () => onPress(movement);
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={style.mainContainer}>
        <View style={style.imageContainer}>
          <Image style={style.image} source={{uri: image}} />
        </View>
        <View style={style.detailsContainer}>
          <Label variant="productName" numberOfLines={1} ellipsizeMode="tail">
            {product}
          </Label>
          <Label variant="productDate">{dateFormatShort(createdAt)}</Label>
        </View>
        <View style={style.pointsContainer}>
          <Label variant={is_redemption ? 'signNegative' : 'signPositive'}>
            {is_redemption ? '-' : '+'}
          </Label>
          <Label variant="smallPoints">{points.toLocaleString()}</Label>
        </View>
        <View style={style.arrowContainer}>
          <Arrow style={style.arrow} />
        </View>
      </View>
    </TouchableOpacity>
  );
});

export {MovementRow};
