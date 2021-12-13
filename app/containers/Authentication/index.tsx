/**
 *
 * Authentication
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { useUserLocation } from 'containers/UserLocation';
import {
  AuthenticationProps,
  State,
  LoginActionPayload,
  UseAuthenticationReturn,
  SignUpActionPayload,
  LinkSocialAccountActionPayload,
} from './types';
import makeSelectAuthentication from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

export function useAuthentication(): UseAuthenticationReturn {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });
  useUserLocation();
  const dispatch = useDispatch();
  const store: State = useSelector(makeSelectAuthentication(), shallowEqual);

  useEffect(() => {
    if (!store.localChecked) {
      dispatch(actions.getAccountType());
      dispatch(actions.fetchLocalToken());
    }
  }, []);

  const signUp = (payload: SignUpActionPayload) =>
    dispatch(actions.signUp(payload));
  const login = (payload: LoginActionPayload) =>
    dispatch(actions.login(payload));
  const logout = () => dispatch(actions.logout());
  const reset = () => dispatch(actions.reset());
  const linkSocialAccount = (payload: LinkSocialAccountActionPayload) =>
    dispatch(actions.linkSocialAccount(payload));

  return { ...store, signUp, login, logout, reset, linkSocialAccount };
}

export function useUser() {
  const auth = useAuthentication();
  return auth.user;
}

export function useIsActiveUser() {
  const auth = useAuthentication();
  return auth.isAuthenticated && auth.user?.data;
}

export function Authentication({ children }: AuthenticationProps) {
  const store = useAuthentication();

  return store ? children(store) : null;
}

export default React.memo(Authentication);
