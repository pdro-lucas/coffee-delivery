import CoffeDeliveryCup from '@/assets/coffee-delivery-cup.png';
import { Heading } from '@/components/Heading';
import {
  InfoHighlightCard,
  InfoHighlightCardProps,
} from '@/components/InfoHighlightCard';
import { Text } from '@/components/Text';
import { Flex } from '@/components/Utilities';
import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react';
import * as S from './styles';

const heroItems: InfoHighlightCardProps[] = [
  {
    title: 'Compra simples e segura',
    background: 'secondary',
    icon: <ShoppingCartSimple size={16} weight="fill" />,
  },
  {
    title: 'Embalagem mantém o café intacto',
    background: 'dark',
    icon: <Package size={16} weight="fill" />,
  },
  {
    title: 'Entrega rápida e rastreada',
    background: 'primary',
    icon: <Timer size={16} weight="fill" />,
  },
  {
    title: 'O café chega fresquinho até você',
    background: 'purple',
    icon: <Coffee size={16} weight="fill" />,
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
            <InfoHighlightCard
              background={item.background}
              title={item.title}
              icon={item.icon}
              key={item.title}
            />
          ))}
        </Flex>
      </S.HeroContext>
      <S.HeroImage>
        <img src={CoffeDeliveryCup} alt="" />
      </S.HeroImage>
    </Flex>
  );
}
