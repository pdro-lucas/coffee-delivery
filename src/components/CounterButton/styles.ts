import styled, { css } from 'styled-components';

export const Wrapper = styled.span`
  border-radius: 0.375rem;
  max-width: max-content;

  display: inline-block;
  background-color: ${({ theme }) => theme.colors.base.button};

  overflow: hidden;
`;

interface ButtonVariant {
  $variant?: 'compact' | 'normal';
}

const baseButton = styled.button<ButtonVariant>`
  line-height: 0%;

  background-color: transparent;
  outline: none;
  border: none;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.purple.normal};
  transition: background-color 0.2s linear;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.base.hover};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const DecrementButton = styled(baseButton)`
  ${(props) =>
    props.$variant
      ? css`
          padding: 0.6rem;
        `
      : css`
          padding: 0.75rem 0.25rem 0.75rem 0.5rem;
        `}
`;

export const IncrementButton = styled(baseButton)`
  ${(props) =>
    props.$variant
      ? css`
          padding: 0.6rem;
        `
      : css`
          padding: 0.75rem 0.5rem 0.75rem 0.25rem;
        `}
`;

export const Counter = styled.span`
  padding: 0 0.5rem;
`;
