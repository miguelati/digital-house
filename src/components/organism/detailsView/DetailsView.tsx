import {View, Image} from 'react-native';
import React from 'react';
import {Label} from '~/components/atoms/label';
import {Button} from '~/components/atoms/button';
import {style} from './DetailsView.styles';
import {dateFormatLong} from '~/utils';

const DetailsView = ({
  image,
  createdAt,
  points,
  onAccept,
}: Components.DetailsViewProps) => {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image style={style.image} source={{uri: image}} />
      </View>
      <Label style={style.labelDetails} variant="subTitle">
        Detalles del producto:
      </Label>
      <Label variant="detailText">{dateFormatLong(createdAt)}</Label>
      <Label style={style.labelPoints} variant="subTitle">
        Con esta compra acumulaste:
      </Label>
      <Label variant="detailPointsText">{points.toLocaleString()} puntos</Label>
      <View style={style.buttonContainer}>
        <Button title="Aceptar" onPress={onAccept} />
      </View>
    </View>
  );
};

export {DetailsView};
