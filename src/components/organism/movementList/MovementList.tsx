import {View, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {Label} from '~/components/atoms/label';
import {MovementRow} from '~/components/molecules/movementRow';
import {style} from './MovementList.styles';

const MovementList = ({movements, onPress}: Components.MovementListProps) => {
  const renderItem = useCallback(
    ({item}: {item: ApiDataProducts}) => (
      <MovementRow movement={item} onPress={onPress} />
    ),
    [onPress],
  );
  return (
    <View style={style.container}>
      <Label style={style.subTitle} variant="subTitle">
        TUS MOVIMIENTOS
      </Label>
      <FlatList<ApiDataProducts>
        style={style.flatList}
        data={movements}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        maxToRenderPerBatch={10}
        windowSize={10}
        initialNumToRender={6}
        contentContainerStyle={style.flatListContent}
        renderItem={renderItem}
      />
    </View>
  );
};

export {MovementList};
