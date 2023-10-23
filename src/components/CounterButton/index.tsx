import { Minus, Plus } from 'phosphor-react';
import * as S from './styles';

export interface CounterButtonProps {
  count: number;
  $variant?: 'compact' | 'normal';
  incrementCoffee: () => void;
  decrementCoffee: () => void;
}

export function CounterButton({
  incrementCoffee,
  decrementCoffee,
  count,
  $variant,
}: CounterButtonProps) {
  const decrementButtonIsActive = count === 1;

  return (
    <S.Wrapper>
      <S.DecrementButton
        onClick={decrementCoffee}
        disabled={decrementButtonIsActive}
        $variant={$variant}
      >
        <Minus size={16} />
      </S.DecrementButton>
      <S.Counter>{count}</S.Counter>
      <S.IncrementButton onClick={incrementCoffee} $variant={$variant}>
        <Plus size={16} />
      </S.IncrementButton>
    </S.Wrapper>
  );
}
