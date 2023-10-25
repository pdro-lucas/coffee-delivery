import { useState } from 'react';

interface UseCoffeeAmountProps {
  coffeeAmountValue?: number;
}

export function useCoffeeAmount({
  coffeeAmountValue,
}: UseCoffeeAmountProps = {}) {
  const [coffeeAmount, setCoffeeAmount] = useState(coffeeAmountValue ?? 1);

  function incrementCoffee() {
    setCoffeeAmount((prevState) => prevState + 1);
  }

  function decrementCoffee() {
    setCoffeeAmount((prevState) => {
      if (prevState === 1) return prevState;

      return prevState - 1;
    });
  }

  return {
    coffeeAmount,
    incrementCoffee,
    decrementCoffee,
  };
}
