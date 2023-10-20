import { ReactNode } from 'react';
import * as S from './styles';
import { defaultTheme } from '@/styles/themes/default';

export interface TextProps {
  $as?: 'p' | 'span';
  $size?: 'lg' | 'md' | 'sm' | 'xs' | 'tag';
  $weight?: 400 | 700 | 800;
  $color?: keyof typeof defaultTheme.colors.base;
  children: ReactNode;
}

export function Text({
  $as = 'p',
  $size = 'md',
  $weight = 400,
  $color = 'text',
  children,
}: TextProps) {
  const tagName = $as;

  return (
    <S.Text $color={$color} as={tagName} $size={$size} $weight={$weight}>
      {children}
    </S.Text>
  );
}
