import styled, { css } from 'styled-components';
import { TextProps } from '.';

const baseText = styled.div<TextProps>`
  line-height: 130%;
  color: ${(props) =>
    props.$color
      ? props.theme.colors.base[props.$color]
      : props.theme.colors.base.text};

  font-family: var(--font-family-roboto);
  text-transform: ${(props) =>
    props.$transform === 'uppercase' ? props.$transform : 'unset'};
`;

export const Text = styled(baseText)`
  ${(props) => {
    switch (props.$size) {
      case 'lg':
        return css`
          font-size: 1.25rem;
          font-weight: ${props.$weight};
        `;
      case 'md':
        return css`
          font-size: 1rem;
          font-weight: ${props.$weight};
        `;
      case 'sm':
        return css`
          font-size: 0.875rem;
          font-weight: ${props.$weight};
        `;
      case 'xs':
        return css`
          font-size: 0.75rem;
          font-weight: ${props.$weight};
        `;
      case 'tag':
        return css`
          font-size: 0.625rem;
          font-weight: ${props.$weight};
        `;
    }
  }}
`;
