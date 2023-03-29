declare namespace Components {
  type FilterType = import('./FilterView').FilterType;
  declare type FilterViewProps = {
    isFiltered: boolean;
    onPress: (filterSelected: FilterType) => void;
  };
}
