import {View} from 'react-native';
import React from 'react';
import {Button} from '~/components/atoms/button';
import {style} from './FilterView.styles';

export const enum FilterType {
  ALL,
  WINNED,
  EXCHANGED,
}

const FilterView = ({isFiltered, onPress}: Components.FilterViewProps) => {
  const onPressHandler = (filter: FilterType) => () => onPress(filter);
  return isFiltered ? (
    <View style={style.containerSingle}>
      <Button title="Todos" onPress={onPressHandler(FilterType.ALL)} />
    </View>
  ) : (
    <View style={style.containerDouble}>
      <View style={style.winnedContainer}>
        <Button title="Ganados" onPress={onPressHandler(FilterType.WINNED)} />
      </View>
      <View style={style.exchangedContainer}>
        <Button
          title="Canjeados"
          onPress={onPressHandler(FilterType.EXCHANGED)}
        />
      </View>
    </View>
  );
};

export {FilterView};
