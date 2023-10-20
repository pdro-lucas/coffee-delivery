import styled from 'styled-components';
import { TextProps } from '.';

const baseText = styled.div`
  line-height: 130%;
  color: ${(props) => props.theme.colors.base.text};

  font-family: var(--font-family-roboto);
`;

export const Text = styled(baseText)<TextProps>`
  ${(props) => {
    switch (props.$size) {
      case 'lg':
        return `
        font-size: 1.25rem;
        font-weight: ${props.$weight}
      `;
      case 'md':
        return `
        font-size: 1rem;
        font-weight: ${props.$weight};
      `;
      case 'sm':
        return `
        font-size: 0.875rem;
        font-weight: ${props.$weight};
      `;
      case 'xs':
        return `
        font-size: 0.75rem;
        font-weight: ${props.$weight};
      `;
      case 'tag':
        return `
        font-size: 0.625rem;
        font-weight: ${props.$weight};
      `;
    }
  }}
`;
