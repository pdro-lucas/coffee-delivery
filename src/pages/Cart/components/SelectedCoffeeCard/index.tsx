import { Flex } from '@/components/Utilities';
import * as S from './styles';
import { Text } from '@/components/Text';
import { CounterButton } from '@/components/CounterButton';
import Americano from '@assets/coffees/americano.png';
import { Button } from '@/components/Button';
import { Trash } from 'phosphor-react';

export function SelectedCoffeeCard() {
  return (
    <S.CoffeeCard>
      <img src={Americano} alt="" />
      <Flex $direction="column" $gap="0.5rem">
        <Flex $justify="space-between">
          <Text $color="subtitle">Expresso Tradicional</Text>
          <Text $weight={700}>R$ 9,90</Text>
        </Flex>
        <Flex $gap="0.5rem" $align="flex-start">
          <CounterButton
            decrementCoffee={() => {}}
            incrementCoffee={() => {}}
            count={1}
            $variant="compact"
          />
          <Button $variant="secondary" $gap={0.25}>
            <Trash size={16} />
            Remover
          </Button>
        </Flex>
      </Flex>
    </S.CoffeeCard>
  );
}
