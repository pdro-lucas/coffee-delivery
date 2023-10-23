import { useFormContext } from 'react-hook-form';

import * as S from './styles';

export function AddressForm() {
  const { register } = useFormContext();

  return (
    <S.FormContainer>
      <S.Input
        {...register('cep')}
        type="text"
        placeholder="CEP"
        className="cep"
      />
      <S.Input
        {...register('rua')}
        type="text"
        placeholder="Rua"
        className="rua"
      />
      <S.Input
        {...register('numero')}
        type="text"
        placeholder="Número"
        className="numero"
      />
      <S.Input
        {...register('complemento')}
        type="text"
        placeholder="Complemento"
        className="complemento"
      />
      <S.Input
        {...register('bairro')}
        type="text"
        placeholder="Bairro"
        className="bairro"
      />
      <S.Input
        {...register('cidade')}
        type="text"
        placeholder="cidade"
        className="cidade"
      />
      <S.Input
        {...register('uf')}
        type="text"
        placeholder="UF"
        className="uf"
      />
    </S.FormContainer>
  );
}
