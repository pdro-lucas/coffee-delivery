import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './styles';

type ButtonVariants = 'primary' | 'secondary' | 'icon' | 'cartButton';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  $variant?: ButtonVariants;
  $gap?: number;
}

export function Button({ children, $gap, ...rest }: ButtonProps) {
  return (
    <S.StyledButton $gap={$gap} {...rest}>
      {children}
    </S.StyledButton>
  );
}
