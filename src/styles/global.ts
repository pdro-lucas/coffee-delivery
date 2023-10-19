import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Fonts */

      /* Font Families */
      --font-family-roboto: "Roboto", sans-serif;
      --font-family-baloo2: "Baloo 2", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.base.background};
    color: ${(props) => props.theme.colors.base.text};
    --webkit-font-smoothing: antialiased;
  }

   body, input, textarea, button {
    font-family: var(--font-family-roboto);
    font-weight: ${({ theme }) => theme.font.regular};
    font-size: 1rem;
  }
`;
