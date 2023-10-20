import { CoffeeCard } from '@/components/CoffeeCard';
import { Heading } from '@/components/Heading';
import { Flex } from '@/components/Utilities';
import { coffee } from './coffees';

import * as S from './styles';

export function CooffeesSection() {
  return (
    <S.CoffeesSection>
      <Heading $level="h2">Nossos cafés</Heading>
      <Flex
        $mt="3.37rem"
        $columnGap="2rem"
        $rowGap="2.5rem"
        $wrap="wrap"
        $justify="center"
      >
        {coffee.map(({ title, image, description, tags, price }) => (
          <CoffeeCard
            key={title}
            image={image}
            title={title}
            description={description}
            tags={tags}
            price={price}
          />
        ))}
      </Flex>
    </S.CoffeesSection>
  );
}
