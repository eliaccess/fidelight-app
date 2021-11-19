/**
 *
 * EarningPolicyTypes
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import {
  EarningPolicyTypesProps,
  UseEarningPolicyTypesProps,
  State,
} from './types';
import makeSelectEarningPolicyTypes from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

export function useEarningPolicyTypes(
  _props?: UseEarningPolicyTypesProps,
): State {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store = useSelector(makeSelectEarningPolicyTypes(), shallowEqual);

  useEffect(() => {
    if (store?.fetching || store?.data?.length > 0) {
      return;
    }
    dispatch(actions.fetch());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return store;
}

export function EarningPolicyTypes({
  children,
  ...props
}: EarningPolicyTypesProps) {
  const store = useEarningPolicyTypes(props);
  return store ? children(store) : null;
}

export default React.memo(EarningPolicyTypes);
