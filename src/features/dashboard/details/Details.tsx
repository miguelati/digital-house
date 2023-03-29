import {View} from 'react-native';
import React from 'react';
import {useDetails} from './Details.presenter';
import {style} from './Details.styles';
import {HeaderTitle} from '~/components/organism/headerTitle';
import {DetailsView} from '~/components/organism/detailsView';
const Details = ({navigation, route}: DetailsScreenProps) => {
  const {onAcceptPress, movement} = useDetails(route, navigation);
  return (
    <View style={style.container}>
      <HeaderTitle title={movement.product} />
      <DetailsView
        image={movement.image}
        createdAt={movement.createdAt}
        points={movement.points}
        onAccept={onAcceptPress}
      />
    </View>
  );
};

export {Details};
