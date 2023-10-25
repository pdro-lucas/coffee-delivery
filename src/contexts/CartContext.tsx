import { ReactNode, createContext, useEffect, useState } from 'react';

type Tags = {
  title: string;
};

export interface Coffees {
  title: string;
  image: string;
  description: string;
  tags: Tags[];
  price: number;
  amount: number;
}

interface CartContextData {
  coffees: Coffees[];
  addNewCoffeeToCart: (coffee: Coffees) => void;
  removeCoffeeFromCart: (title: string) => void;
  incrementCoffeeInCart: (title: string) => void;
  decrementCoffeeInCart: (title: string) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [coffees, setCoffees] = useState<Coffees[]>(() => {
    const initialCoffees = localStorage.getItem('@coffee:cart');
    return initialCoffees ? JSON.parse(initialCoffees) : [];
  });

  const updateCoffeeAmount = (title: string, amount: number) => {
    setCoffees((prevCoffees) => {
      const existingCoffeeIndex = prevCoffees.findIndex(
        (coffee) => coffee.title === title,
      );

      if (existingCoffeeIndex === -1) {
        return prevCoffees;
      }

      const updatedCoffees = [...prevCoffees];
      updatedCoffees[existingCoffeeIndex].amount += amount;
      return updatedCoffees;
    });
  };

  const addNewCoffeeToCart = (newCoffee: Coffees) => {
    const existingCoffeeIndex = coffees.findIndex(
      (coffee) => coffee.title === newCoffee.title,
    );

    if (existingCoffeeIndex !== -1) {
      updateCoffeeAmount(newCoffee.title, newCoffee.amount);
    } else {
      setCoffees([...coffees, newCoffee]);
    }
  };

  const removeCoffeeFromCart = (title: string) => {
    setCoffees((prevCoffees) =>
      prevCoffees.filter((coffee) => coffee.title !== title),
    );
  };

  const incrementCoffeeInCart = (title: string) => {
    updateCoffeeAmount(title, 1);
  };

  const decrementCoffeeInCart = (title: string) => {
    const existingCoffee = coffees.find((coffee) => coffee.title === title);
    if (existingCoffee && existingCoffee.amount > 1) {
      updateCoffeeAmount(title, -1);
    }
  };

  useEffect(() => {
    localStorage.setItem('@coffee:cart', JSON.stringify(coffees));
  }, [coffees]);

  return (
    <CartContext.Provider
      value={{
        coffees,
        addNewCoffeeToCart,
        removeCoffeeFromCart,
        incrementCoffeeInCart,
        decrementCoffeeInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
