declare namespace Components {
  type TextProps = import('react-native/types').TextProps;
  type fonts = keyof typeof import('~/themes/fonts').Fonts;

  declare type LabelProps = TextProps & {
    variant?: fonts;
  };
}
