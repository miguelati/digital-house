declare namespace Components {
  type RNButtonProps = import('react-native/types').ButtonProps;
  type fonts = keyof typeof import('~/themes/fonts').Fonts;

  declare type ButtonProps = RNButtonProps;
}
