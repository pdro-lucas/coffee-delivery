import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

const primaryStyles = css`
  padding: 0.75rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;

  background-color: ${({ theme }) => theme.colors.yellow.normal};
  color: ${({ theme }) => theme.colors.base.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow.dark};
  }
`;

const secondaryStyles = css`
  padding: 0.5rem;
  font-size: 0.75rem;
  line-height: 160%;

  background-color: ${({ theme }) => theme.colors.base.button};

  svg {
    color: ${({ theme }) => theme.colors.purple.normal};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.base.hover};
  }
`;

const iconStyles = css`
  padding: 0.5rem;

  background-color: ${({ theme }) => theme.colors.purple.dark};
  color: ${({ theme }) => theme.colors.base.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple.normal};
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.$gap ? props.$gap + 'rem' : '')};

  border-radius: 0.375rem;

  border: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.1s linear;

  ${({ $variant }) => $variant === 'primary' && primaryStyles}
  ${({ $variant }) => $variant === 'secondary' && secondaryStyles}
  ${({ $variant }) => $variant === 'icon' && iconStyles}
`;

StyledButton.defaultProps = {
  $variant: 'primary',
};
