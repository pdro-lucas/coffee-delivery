import { Heading } from '@/components/Heading';
import * as S from './styles';
import { Text } from '@/components/Text';
import { Flex } from '../Utilities';

type Tags = {
  title: string;
};

export interface CardProps {
  title: string;
  description: string;
  tags: Tags[];
  image: string;
  price: number;
}
export function CoffeeCard({
  title,
  image,
  description,
  tags,
  price,
}: CardProps) {
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
        </S.CardFooter>
      </S.CardBody>
    </S.Card>
  );
}
