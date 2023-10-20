import { Heading } from '@/components/Heading';
import { ShoppingCartSimple } from 'phosphor-react';
import { ReactNode } from 'react';
import CoffeDeliveryCup from '@/assets/coffee-delivery-cup.png';
import { Text } from '@/components/Text';
import { Flex } from '@/components/Utilities';
import * as S from './styles';

export type HeroItemBackground = 'primary' | 'secondary' | 'purple' | 'dark';

interface HeroItems {
  id: number;
  title: string;
  background: HeroItemBackground;
  icon: ReactNode;
}

const heroItems: HeroItems[] = [
  {
    id: 1,
    title: 'Compra simples e segura',
    background: 'secondary',
    icon: <ShoppingCartSimple size={16} weight="fill" />,
  },
  {
    id: 2,
    title: 'Embalagem mantém o café intacto',
    background: 'dark',
    icon: <ShoppingCartSimple size={16} weight="fill" />,
  },
  {
    id: 3,
    title: 'Entrega rápida e rastreada',
    background: 'primary',
    icon: <ShoppingCartSimple size={16} weight="fill" />,
  },
  {
    id: 4,
    title: 'O café chega fresquinho até você',
    background: 'purple',
    icon: <ShoppingCartSimple size={16} weight="fill" />,
  },
];

export function HeroSection() {
  return (
    <Flex
      $direction="row"
      $justify="space-between"
      $align="flex-start"
      $gap="2rem"
      $wrap="wrap"
      $pb="5rem"
    >
      <S.HeroContext>
        <Heading $level="h1">
          Encontre o café perfeito para qualquer hora do dia
        </Heading>
        <Text $size="lg">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Text>
        <Flex $mt="4.12rem" $rowGap="1.75rem" $columnGap="2.7rem" $wrap="wrap">
          {heroItems.map((item) => (
            <Flex key={item.id} $gap="0.75rem" $align="center">
              <S.ItemIcon $bg={item.background}>{item.icon}</S.ItemIcon>
              <Text $size="sm" $as="span">
                {item.title}
              </Text>
            </Flex>
          ))}
        </Flex>
      </S.HeroContext>
      <S.HeroImage>
        <img src={CoffeDeliveryCup} alt="" />
      </S.HeroImage>
    </Flex>
  );
}
