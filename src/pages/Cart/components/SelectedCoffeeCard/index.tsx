import { Flex } from '@/components/Utilities';
import * as S from './styles';
import { Text } from '@/components/Text';
import { CounterButton } from '@/components/CounterButton';
import { Button } from '@/components/Button';
import { Trash } from 'phosphor-react';
import { CartContext, Coffees } from '@/contexts/CartContext';
import { useContext } from 'react';

interface SelectedCoffeeCardProps {
  coffee: Coffees;
}

export function SelectedCoffeeCard({ coffee }: SelectedCoffeeCardProps) {
  const { removeCoffeeFromCart, incrementCoffeeInCart, decrementCoffeeInCart } =
    useContext(CartContext);

  return (
    <S.CoffeeCard>
      <img src={coffee.image} alt={coffee.title} />

      <Flex $direction="column" $gap="0.5rem">
        <Flex $justify="space-between" $wrap="wrap">
          <Text $color="subtitle">{coffee.title}</Text>
          <Text $weight={700}>R$ {coffee.price}</Text>
        </Flex>
        <Flex $gap="0.5rem" $align="flex-start" $wrap="wrap">
          <CounterButton
            decrementCoffee={() => decrementCoffeeInCart(coffee.title)}
            incrementCoffee={() => incrementCoffeeInCart(coffee.title)}
            count={coffee.amount}
            $variant="compact"
          />
          <Button
            $variant="secondary"
            $gap={0.25}
            type="button"
            onClick={() => removeCoffeeFromCart(coffee.title)}
          >
            <Trash size={16} />
            Remover
          </Button>
        </Flex>
      </Flex>
    </S.CoffeeCard>
  );
}
