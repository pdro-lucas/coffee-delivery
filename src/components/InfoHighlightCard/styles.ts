import styled from 'styled-components';
import { Background } from '.';

interface CardIcon {
  $bg: Background;
}

export const CardIcon = styled.div<CardIcon>`
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
