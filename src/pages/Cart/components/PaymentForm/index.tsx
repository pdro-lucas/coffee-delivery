import { useFormContext } from 'react-hook-form';

import * as S from './styles';
import { CreditCard } from 'phosphor-react';
import { Text } from '@/components/Text';

export function PaymentForm() {
  const { register } = useFormContext();

  return (
    <S.Container>
      <S.InvisibleInputOption
        {...register('paymentMethod')}
        type="radio"
        id="credito"
        value="credito"
      />
      <S.PaymentType htmlFor="credito">
        <CreditCard size={16} />
        <Text $transform="uppercase" $size="xs" $as="span">
          Cartão de crédito
        </Text>
      </S.PaymentType>

      <S.InvisibleInputOption
        {...register('paymentMethod')}
        type="radio"
        id="debito"
        value="debito"
      />
      <S.PaymentType htmlFor="debito">
        <CreditCard size={16} />
        <Text $transform="uppercase" $size="xs" $as="span">
          Cartão de débito
        </Text>
      </S.PaymentType>

      <S.InvisibleInputOption
        {...register('paymentMethod')}
        type="radio"
        id="dinheiro"
        value="dinheiro"
      />
      <S.PaymentType htmlFor="dinheiro">
        <CreditCard size={16} />
        <Text $transform="uppercase" $size="xs" $as="span">
          Dinheiro
        </Text>
      </S.PaymentType>
    </S.Container>
  );
}
