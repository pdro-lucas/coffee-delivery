import styled from 'styled-components';

export const FormContainer = styled.div`
  display: grid;

  width: 100%;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 3.75rem;
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  width: 100%;
  border-radius: 0.25rem;

  outline: none;

  background-color: ${({ theme }) => theme.colors.base.input};
  border: 1px solid ${({ theme }) => theme.colors.base.button};
  color: ${({ theme }) => theme.colors.base.text};

  &::placeholder {
    font-size: 0.875rem;

    color: ${({ theme }) => theme.colors.base.label};
  }

  @media (min-width: 768px) {
    &.cep {
      grid-column: 1;
    }

    &.rua {
      grid-column: 1 / span 3;
    }

    &.numero {
      grid-column: 1;
    }

    &.complemento {
      grid-column: 2 / span 2;
    }

    &.bairro {
      grid-column: 1;
    }

    &.cidade {
      grid-column: 2;
    }

    &.uf {
      grid-column: 3;
    }
  }
`;
