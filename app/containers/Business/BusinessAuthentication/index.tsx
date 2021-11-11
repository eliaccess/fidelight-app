/**
 *
 * BusinessAuthentication
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { useUserLocation } from 'containers/UserLocation';
import {
  BusinessAuthenticationProps,
  State,
  LoginActionPayload,
  UseBusinessAuthenticationReturn,
  SignUpActionPayload,
} from './types';
import makeSelectBusinessAuthentication from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

export function useBusinessAuthentication(): UseBusinessAuthenticationReturn {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });
  useUserLocation();
  const dispatch = useDispatch();
  const store: State = useSelector(
    makeSelectBusinessAuthentication(),
    shallowEqual,
  );

  useEffect(() => {
    if (!store.localChecked) {
      dispatch(actions.getAccountType());
      dispatch(actions.fetchLocalToken());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signUp = (payload: SignUpActionPayload) =>
    dispatch(actions.signUp(payload));
  const login = (payload: LoginActionPayload) =>
    dispatch(actions.login(payload));
  const logout = () => dispatch(actions.logout());

  const reset = () => dispatch(actions.reset());
  return { ...store, signUp, login, logout, reset };
}

export function useUser() {
  const auth = useBusinessAuthentication();
  return auth.user;
}

export function useIsActiveUser() {
  const auth = useBusinessAuthentication();
  return auth.isAuthenticated && auth.user?.data;
}

export function BusinessAuthentication({
  children,
}: BusinessAuthenticationProps) {
  const store = useBusinessAuthentication();

  return store ? children(store) : null;
}

export default React.memo(BusinessAuthentication);
