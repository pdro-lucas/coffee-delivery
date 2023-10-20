import styled from 'styled-components';

export const Header = styled.header`
  padding: 2rem 0;
  position: fixed;

  top: 0;
  left: 0;
  right: 0;

  background: hsla(0, 0%, 98%, 0.8);
  backdrop-filter: blur(12px);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

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

export const NavItems = styled.div`
  display: flex;
  gap: 0.75rem;

  a {
    padding: 0.5rem;
    line-height: 0;
    border-radius: 0.375rem;

    background-color: ${({ theme }) => theme.colors.yellow.light};
    color: ${({ theme }) => theme.colors.yellow.dark};
  }
`;

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 130%;

  background-color: ${({ theme }) => theme.colors.purple.light};
  color: ${({ theme }) => theme.colors.purple.dark};

  svg {
    color: ${({ theme }) => theme.colors.purple.normal};
  }
`;
