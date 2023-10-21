import { Minus, Plus } from 'phosphor-react';
import * as S from './styles';

interface CounterButtonProps {
  count: number;
  incrementCoffee: () => void;
  decrementCoffee: () => void;
}

export function CounterButton({
  incrementCoffee,
  decrementCoffee,
  count,
}: CounterButtonProps) {
  const decrementButtonIsActive = count === 1;

  return (
    <S.Wrapper>
      <S.DecrementButton
        onClick={decrementCoffee}
        disabled={decrementButtonIsActive}
      >
        <Minus size={16} />
      </S.DecrementButton>
      <S.Counter>{count}</S.Counter>
      <S.IncrementButton onClick={incrementCoffee}>
        <Plus size={16} />
      </S.IncrementButton>
    </S.Wrapper>
  );
}
