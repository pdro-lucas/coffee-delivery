import { ReactNode } from 'react';
import * as S from './styles';

export interface HeadingProps {
  $level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children: ReactNode;
}

export function Heading({ $level, children }: HeadingProps) {
  const tagName = $level;

  return (
    <S.Heading as={tagName} $level={$level}>
      {children}
    </S.Heading>
  );
}
