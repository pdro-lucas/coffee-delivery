import { Button } from '@/components/Button';
import { Heading } from '@/components/Heading';
import { Text } from '@/components/Text';
import { Container, Flex } from '@/components/Utilities';
import { defaultTheme as theme } from '@/styles/themes/default';
import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { FormProvider, useForm } from 'react-hook-form';
import { AddressForm } from './components/AddressForm';
import * as S from './styles';
import { PaymentForm } from './components/PaymentForm';

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
                  teste 2 bebe
                  <Button type="submit">COnfirmar pedido</Button>
                </S.OrderCard>
              </S.OrderDetails>
            </S.FormContainer>
          </form>
        </FormProvider>
      </Container>
    </S.Main>
  );
}
