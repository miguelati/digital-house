import {SafeAreaView} from 'react-native';
import React from 'react';
import {WelcomeView} from '~/components/molecules/welcomeView';
import {TotalPointsView} from '~/components/molecules/totalPointsView';
import {MovementList} from '~/components/organism/movementList';
import {style} from './Home.styles';
import {FilterView, FilterType} from '~/components/organism/filterView';
import {useHome} from './Home.presenter';

const Home = ({navigation}: HomeScreenProps) => {
  const {movements, totalPoints, onFilterChange, filter, onSelectMovement} =
    useHome(navigation);

  return (
    <SafeAreaView style={style.container}>
      <WelcomeView user="Ruben Rodriguez" />
      <TotalPointsView points={totalPoints} month="Diciembre" />
      <MovementList movements={movements || []} onPress={onSelectMovement} />
      <FilterView
        isFiltered={filter !== FilterType.ALL}
        onPress={onFilterChange}
      />
    </SafeAreaView>
  );
};

export {Home};
