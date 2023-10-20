import styled from 'styled-components';
import Background from '../../assets/background.png';

export const Main = styled.main`
  height: calc(100vh - 6.5rem);
  margin-top: 6.5rem;

  section:first-child {
    padding-top: 5.75rem;
    height: 34rem;

    background:
      linear-gradient(
        0deg,
        rgba(250, 250, 250, 1) 0%,
        rgba(255, 255, 255, 0) 10%
      ),
      url(${Background}) no-repeat;
    background-size: cover;
  }
`;
