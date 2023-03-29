import {useMemo, useState} from 'react';
import {useProducts} from '~/api/products';

import {FilterType} from '~/components/organism/filterView';

export const useHome = (navigation: HomeScreenProps) => {
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL);
  const {data} = useProducts();
  const totalPoints = useMemo(
    () =>
      data?.reduce(
        (total, movement) =>
          movement.is_redemption
            ? total - movement.points
            : total + movement.points,
        0,
      ) ?? 0,
    [data],
  );

  const movements = useMemo(() => {
    if (filter === FilterType.ALL) {
      return data;
    }
    return data?.filter(
      movement => movement.is_redemption === (FilterType.EXCHANGED === filter),
    );
  }, [data, filter]);

  const onFilterChange = (filterSelected: FilterType) =>
    setFilter(filterSelected);

  const onSelectMovement = (movement: ApiDataProducts) =>
    navigation.navigate('Details', {movement});

  return {movements, totalPoints, filter, onFilterChange, onSelectMovement};
};
