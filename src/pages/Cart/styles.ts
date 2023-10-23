import styled from 'styled-components';

export const Main = styled.main`
  height: calc(100vh - 6.5rem);
  margin-top: 6.5rem;
  padding-top: 2.5rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const PurchaseDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  @media (min-width: 1024px) {
    max-width: 40rem;
  }
`;

export const OrderPaymentDetails = styled.div`
  border-radius: 0.375rem;
  padding: 2.5rem;

  background-color: ${({ theme }) => theme.colors.base.card};
`;

export const OrderDetails = styled(PurchaseDetails)`
  @media (min-width: 1024px) {
    max-width: 28rem;
  }
`;

export const OrderCard = styled(OrderPaymentDetails)`
  border-radius: 0.375rem 2.75rem;

  background-color: ${({ theme }) => theme.colors.base.card};
`;
