import { Heading } from '@/components/Heading';
import { Text } from '@/components/Text';
import { useContext } from 'react';
import { CounterButton } from '@/components/CounterButton';
import { Flex } from '@/components/Utilities';
import * as S from './styles';
import { Button } from '@/components/Button';
import { ShoppingCartSimple } from 'phosphor-react';
import { CartContext } from '@/contexts/CartContext';
import { useCoffeeAmount } from '@/hooks/useCoffeeAmount';

type Tags = {
  title: string;
};

export interface CardProps {
  title: string;
  image: string;
  description: string;
  tags: Tags[];
  price: number;
}

export function CoffeeCard({
  title,
  image,
  description,
  tags,
  price,
}: CardProps) {
  const { coffeeAmount, decrementCoffee, incrementCoffee } = useCoffeeAmount();
  const { addNewCoffeeToCart } = useContext(CartContext);

  function handleAddCoffeeToCart() {
    addNewCoffeeToCart({
      title,
      image,
      description,
      tags,
      price,
      amount: coffeeAmount,
    });
  }

  return (
    <S.Card>
      <img src={image} alt={title} />

      <S.CardBody>
        <Flex $gap="0.25rem" $wrap="wrap" $justify="center" $align="center">
          {tags.map((tag) => (
            <S.CardTag key={tag.title}>{tag.title}</S.CardTag>
          ))}
        </Flex>
        <Heading $level="h4">{title}</Heading>
        <Text $color="label" $size="sm">
          {description}
        </Text>
        <S.CardFooter>
          <Flex $gap="0.25rem" $align="baseline">
            <Text $as="span" $size="sm">
              R$
            </Text>
            <Heading $color="text" $level="h3">
              {price}
            </Heading>
          </Flex>
          <Flex $gap="0.5rem">
            <CounterButton
              count={coffeeAmount}
              incrementCoffee={incrementCoffee}
              decrementCoffee={decrementCoffee}
            />
            <Button
              $variant="icon"
              type="button"
              title="Add coffee to your cart"
              aria-label="Add coffee to your cart"
              onClick={() => handleAddCoffeeToCart()}
            >
              <ShoppingCartSimple size={24} weight="fill" />
            </Button>
          </Flex>
        </S.CardFooter>
      </S.CardBody>
    </S.Card>
  );
}
