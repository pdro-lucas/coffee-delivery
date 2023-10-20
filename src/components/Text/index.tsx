import { ReactNode } from 'react';
import * as S from './styles';
export interface TextProps {
  $as?: 'p' | 'span';
  $size?: 'lg' | 'md' | 'sm' | 'xs' | 'tag';
  $weight?: 400 | 700 | 800;
  children: ReactNode;
}

export function Text({
  $as = 'p',
  $size = 'md',
  $weight = 400,
  children,
}: TextProps) {
  const tagName = $as;

  return (
    <S.Text as={tagName} $size={$size} $weight={$weight}>
      {children}
    </S.Text>
  );
}
