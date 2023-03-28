import {View, FlatList} from 'react-native';
import React from 'react';
import {Label} from '~/components/atoms/label';
import {MovementRow} from '~/components/molecules/movementRow';
import {style} from './MovementList.styles';

const MovementList = ({movements}: Components.MovementListProps) => {
  return (
    <View style={style.container}>
      <Label style={style.subTitle} variant="subTitle">
        TUS MOVIMIENTOS
      </Label>
      <FlatList<ApiDataProducts>
        style={style.flatList}
        data={movements}
        contentContainerStyle={style.flatListContent}
        renderItem={({item}) => (
          <MovementRow movement={item} onPress={() => {}} />
        )}
      />
    </View>
  );
};

export {MovementList};
