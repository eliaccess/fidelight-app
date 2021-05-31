/**
 *
 * CompanyTypes
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { CompanyTypesProps, UseCompanyTypesProps, State } from './types';
import makeSelectCompanyTypes from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

export function useCompanyTypes(_props?: UseCompanyTypesProps): State {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store = useSelector(makeSelectCompanyTypes(), shallowEqual);

  useEffect(() => {
    if (store?.fetching || store?.data?.length > 0) {
      return;
    }
    dispatch(actions.fetch());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return store;
}

export function CompanyTypes({ children, ...props }: CompanyTypesProps) {
  const store = useCompanyTypes(props);
  return store ? children(store) : null;
}

export default React.memo(CompanyTypes);
