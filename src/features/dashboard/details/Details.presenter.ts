export const useDetails = (
  route: DetailsScreenProps,
  navigation: DetailsScreenProps,
): UserDetailsReturn => {
  const {params: {movement} = {movement: {}}} = route;

  const onAcceptPress = () => navigation.goBack();

  return {onAcceptPress, movement};
};
