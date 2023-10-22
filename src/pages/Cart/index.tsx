import { Heading } from '@/components/Heading';
import { Text } from '@/components/Text';
import { Container, Flex } from '@/components/Utilities';
import { defaultTheme as theme } from '@/styles/themes/default';
import { MapPinLine } from 'phosphor-react';
import * as S from './styles';
import { Button } from '@/components/Button';

export function CartPage() {
  return (
    <S.Main>
      <Container>
        <Flex $gap="2rem">
          <S.PurchaseDetails>
            <Heading $level="h5">Complete seu pedido</Heading>
            <S.AddressCard>
              <Flex $gap="0.5rem" $mb="2rem">
                <MapPinLine size={24} color={theme.colors.yellow.normal} />
                <div>
                  <Text $color="subtitle">Endereço de entrega</Text>
                  <Text $size="sm">
                    Informe o endereço onde deseja receber o seu pedido
                  </Text>
                </div>
              </Flex>
            </S.AddressCard>
          </S.PurchaseDetails>
          <S.OrderDetails as="aside">
            <Heading $level="h5">Cafés selecionados</Heading>
            <S.OrderCard>
              teste 2 bebe
              <Button>COnfirmar pedido</Button>
            </S.OrderCard>
          </S.OrderDetails>
        </Flex>
      </Container>
    </S.Main>
  );
}
