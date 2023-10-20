import styled from 'styled-components';
import { HeroItemBackground } from '.';

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

export const HeroItems = styled.div``;

interface ItemIconStyles {
  $bg: HeroItemBackground;
}

export const ItemIcon = styled.div<ItemIconStyles>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  border-radius: 100px;

  color: ${({ theme }) => theme.colors.base.white};

  ${(props) => {
    const { $bg } = props;
    switch ($bg) {
      case 'primary':
        return `background-color: ${props.theme.colors.yellow.normal}`;
      case 'secondary':
        return `background-color: ${props.theme.colors.yellow.dark}`;
      case 'purple':
        return `background-color: ${props.theme.colors.purple.normal}`;
      case 'dark':
        return `background-color: ${props.theme.colors.base.text}`;
      default:
        return ``;
    }
  }}
`;
