/**
 *
 * DiscountTypes
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { DiscountTypesProps, UseDiscountTypesProps, State } from './types';
import makeSelectDiscountTypes from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

export function useDiscountTypes(_props?: UseDiscountTypesProps): State {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store = useSelector(makeSelectDiscountTypes(), shallowEqual);

  useEffect(() => {
    if (store?.fetching || store?.data?.length > 0) {
      return;
    }
    dispatch(actions.fetch());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return store;
}

export function DiscountTypes({ children, ...props }: DiscountTypesProps) {
  const store = useDiscountTypes(props);
  return store ? children(store) : null;
}

export default React.memo(DiscountTypes);
