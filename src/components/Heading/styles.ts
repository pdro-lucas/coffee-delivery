import styled from 'styled-components';
import { HeadingProps } from '.';

const baseHeading = styled.div`
  line-height: 130%;
  color: ${(props) => props.theme.colors.base.title};

  font-family: var(--font-family-baloo2);
`;
export const Heading = styled(baseHeading)<HeadingProps>`
  ${(props) => {
    switch (props.level) {
      case 'h1':
        return `
        font-size: 3rem;
        font-weight: 800;
      `;
      case 'h2':
        return `
        font-size: 2rem;
        font-weight: 800;
      `;
      case 'h3':
        return `
        font-size: 1.5rem;
        font-weight: 800;
      `;
      case 'h4':
        return `
        font-size: 1.25rem;
        font-weight: 700;
      `;
      case 'h5':
        return `
        font-size: 1.125rem;
        font-weight: 700;
      `;
    }
  }}
`;
