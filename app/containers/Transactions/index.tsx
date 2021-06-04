/**
 *
 * Transactions
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { TransactionsProps, UseTransactionsProps, State } from './types';
import makeSelectTransactions from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

export function useTransactions(_props?: UseTransactionsProps): State {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store = useSelector(makeSelectTransactions(), shallowEqual);

  useEffect(() => {
    if (store?.fetching || store?.data?.length > 0) {
      return;
    }
    dispatch(actions.fetch());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return store;
}

export function Transactions({ children, ...props }: TransactionsProps) {
  const store = useTransactions(props);
  return store ? children(store) : null;
}

export default React.memo(Transactions);
