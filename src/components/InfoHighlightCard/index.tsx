import { Flex } from '@/components/Utilities';
import { Text } from '@/components/Text';
import * as S from './styles';
import { ReactNode } from 'react';

export type Background = 'primary' | 'secondary' | 'purple' | 'dark';

export interface InfoHighlightCardProps {
  title: string;
  background: Background;
  icon: ReactNode;
}

export function InfoHighlightCard({
  background,
  icon,
  title,
}: InfoHighlightCardProps) {
  return (
    <Flex $gap="0.75rem" $align="center">
      <S.CardIcon $bg={background}>{icon}</S.CardIcon>
      <Text $size="sm" $as="span">
        {title}
      </Text>
    </Flex>
  );
}
