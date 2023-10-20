import { ReactNode } from 'react';
import * as S from './styles';
import { defaultTheme } from '@/styles/themes/default';

export interface HeadingProps {
  $level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  $color?: keyof typeof defaultTheme.colors.base;
  children: ReactNode;
}

export function Heading({ $level, $color, children }: HeadingProps) {
  const tagName = $level;

  return (
    <S.Heading as={tagName} $level={$level} $color={$color}>
      {children}
    </S.Heading>
  );
}
