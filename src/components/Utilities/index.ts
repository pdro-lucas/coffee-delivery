import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 56rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 72rem;
  }
`;
