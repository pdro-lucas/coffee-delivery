export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit';

export type AlignItems =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit';

export interface FlexBoxProps {
  $direction?: 'row' | 'column';
  $justify?: JustifyContent;
  $align?: AlignItems;
  $width?: string;
  $gap?: string;
  $rowGap?: string;
  $columnGap?: string;
  $wrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';
  $mt?: string;
  $mb?: string;
  $ml?: string;
  $mr?: string;
  $pt?: string;
  $pb?: string;
  $pl?: string;
  $pr?: string;
}
