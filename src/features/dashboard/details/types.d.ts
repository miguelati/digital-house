declare type DetailsScreenProps = NativeStackScreenProps<
  DashboardStackParamList,
  'Details'
>;

declare type UserDetailsReturn = {
  movement: ApiDataProducts;
  onAcceptPress: () => void;
};
