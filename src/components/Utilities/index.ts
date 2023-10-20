import styled from 'styled-components';
import { FlexBoxProps } from './types';

export const Container = styled.div`
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

export const Flex = styled.div<FlexBoxProps>`
  display: flex;
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};
  flex-direction: ${(props) => props.$direction};
  flex-wrap: ${(props) => props.$wrap};
  gap: ${(props) => props.$gap};
  row-gap: ${(props) => props.$rowGap};
  column-gap: ${(props) => props.$columnGap};

  width: ${(props) => props.$width};

  margin-top: ${(props) => props.$mt};
  margin-bottom: ${(props) => props.$mb};
  margin-left: ${(props) => props.$ml};
  margin-right: ${(props) => props.$mr};

  padding-top: ${(props) => props.$pt};
  padding-bottom: ${(props) => props.$pb};
  padding-left: ${(props) => props.$pl};
  padding-right: ${(props) => props.$pr};
`;
