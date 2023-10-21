import styled from 'styled-components';

export const Wrapper = styled.span`
  border-radius: 0.375rem;

  display: inline-block;
  background-color: ${({ theme }) => theme.colors.base.button};

  overflow: hidden;
`;

const baseButton = styled.button`
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
  padding: 0.75rem 0.25rem 0.75rem 0.5rem;
`;

export const IncrementButton = styled(baseButton)`
  padding: 0.75rem 0.5rem 0.75rem 0.25rem;
`;

export const Counter = styled.span`
  padding: 0 0.5rem;
`;
