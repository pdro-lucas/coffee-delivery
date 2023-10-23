import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 0.75rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const PaymentType = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.375rem;
  width: 100%;

  background: ${({ theme }) => theme.colors.base.button};
  transition: background 0.2s linear;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.purple.normal};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.base.hover};
  }
`;

export const InvisibleInputOption = styled.input`
  display: none;

  &:checked + label {
    background: ${({ theme }) => theme.colors.purple.light};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.purple.normal};
  }
`;
