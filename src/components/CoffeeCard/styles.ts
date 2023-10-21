import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  min-width: 16rem;
  padding: 1.5rem;
  border-radius: 0.375rem 2.25rem;

  text-align: center;
  background-color: ${({ theme }) => theme.colors.base.card};

  img {
    margin-top: calc((1rem + 1.5rem) * -1);
  }

  @media screen and (min-width: 768px) {
    max-width: 22rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 16rem;
  }
`;

export const CardBody = styled.div`
  h4 {
    margin-bottom: 0.5rem;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.06rem;
`;

export const CardTag = styled.span`
  display: inline-block;
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  line-height: 130%;
  margin: 1rem 0rem 0.75rem;

  background-color: ${({ theme }) => theme.colors.yellow.light};
  color: ${({ theme }) => theme.colors.yellow.dark};
  border-radius: 6.25rem;

  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
`;
