import styled from 'styled-components';

export const HeroContext = styled.div`
  flex: 1.2;

  text-align: left;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export const HeroImage = styled.div`
  text-align: center;
  flex: 1;

  img {
    width: 24.75rem;
  }

  @media (min-width: 768px) {
    text-align: right;

    h1 {
      font-size: 3rem;
    }

    img {
      width: 29.75rem;
    }
  }
`;
