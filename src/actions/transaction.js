export const BUY = 'BUY';
export const FETCH_TRANSACTION = 'FETCH_TRANSACTION';

export const buy = () => ({
  type: BUY,
});

export const fetchTransaction = (id) => ({
  type: FETCH_TRANSACTION,
  id,
});
