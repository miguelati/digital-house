declare namespace Components {
  declare type MovementListProps = {
    movements: ApiDataProducts[];
    onPress: (movement: ApiDataProducts) => void;
  };
}
