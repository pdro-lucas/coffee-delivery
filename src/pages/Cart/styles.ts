import styled from 'styled-components';

export const Main = styled.main`
  height: calc(100vh - 6.5rem);
  margin-top: 6.5rem;
  padding-top: 2.5rem;
`;

export const PurchaseDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 40rem;
  width: 100%;
`;

export const AddressCard = styled.div`
  border-radius: 0.375rem;
  padding: 2.5rem;

  background-color: ${({ theme }) => theme.colors.base.card};
`;

export const OrderDetails = styled(PurchaseDetails)`
  max-width: 28rem;
`;

export const OrderCard = styled(AddressCard)`
  border-radius: 0.375rem 2.75rem;

  background-color: ${({ theme }) => theme.colors.base.card};
`;
