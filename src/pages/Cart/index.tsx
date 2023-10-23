import { Button } from '@/components/Button';
import { Heading } from '@/components/Heading';
import { Text } from '@/components/Text';
import { Container, Flex } from '@/components/Utilities';
import { defaultTheme as theme } from '@/styles/themes/default';
import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { FormProvider, useForm } from 'react-hook-form';
import { AddressForm } from './components/AddressForm';
import { PaymentForm } from './components/PaymentForm';
import { SelectedCoffeeCard } from './components/SelectedCoffeeCard';
import * as S from './styles';

interface FormInputData {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  paymentForm: string;
}

export function CartPage() {
  const methods = useForm<FormInputData>();

  function handleFormSubmit(data: FormInputData) {
    console.log(data);
  }

  return (
    <S.Main>
      <Container>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
            <S.FormContainer>
              <S.PurchaseDetails>
                <Heading $level="h5">Complete seu pedido</Heading>

                <Flex $direction="column" $gap="0.75rem">
                  <S.OrderPaymentDetails>
                    <Flex $gap="0.5rem" $mb="2rem">
                      <MapPinLine
                        size={24}
                        color={theme.colors.yellow.normal}
                      />
                      <div>
                        <Text $color="subtitle">Endereço de entrega</Text>
                        <Text $size="sm">
                          Informe o endereço onde deseja receber o seu pedido
                        </Text>
                      </div>
                    </Flex>
                    <AddressForm />
                  </S.OrderPaymentDetails>

                  <S.OrderPaymentDetails>
                    <Flex $gap="0.5rem" $mb="2rem">
                      <CurrencyDollar
                        size={24}
                        color={theme.colors.purple.normal}
                      />
                      <div>
                        <Text $color="subtitle">Pagamento</Text>
                        <Text $size="sm">
                          O pagamento é feito na entrega. Escolha a forma que
                          deseja pagar
                        </Text>
                      </div>
                    </Flex>
                    <PaymentForm />
                  </S.OrderPaymentDetails>
                </Flex>
              </S.PurchaseDetails>

              <S.OrderDetails as="aside">
                <Heading $level="h5">Cafés selecionados</Heading>
                <S.OrderCard>
                  <Flex $gap="1.5rem" $direction="column">
                    <SelectedCoffeeCard />
                    <hr />
                    <SelectedCoffeeCard />
                    <hr />
                    <Flex $direction="column" $gap="0.75rem">
                      <Flex $justify="space-between" $align="center">
                        <Text $size="sm">Total de itens</Text>
                        <Text $size="sm">R$ 29,70</Text>
                      </Flex>
                      <Flex $justify="space-between" $align="center">
                        <Text $size="sm">Entrega</Text>
                        <Text $size="sm">R$ 3,50</Text>
                      </Flex>
                      <Flex $justify="space-between" $align="center">
                        <Text $size="lg" $weight={700}>
                          Total
                        </Text>
                        <Text $size="lg" $weight={700}>
                          R$ 33,20
                        </Text>
                      </Flex>
                    </Flex>
                    <Button type="submit">COnfirmar pedido</Button>
                  </Flex>
                </S.OrderCard>
              </S.OrderDetails>
            </S.FormContainer>
          </form>
        </FormProvider>
      </Container>
    </S.Main>
  );
}
