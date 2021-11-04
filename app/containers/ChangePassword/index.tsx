/* eslint-disable react-hooks/exhaustive-deps */
/**
 *
 * ChangePassword
 *
 */

import React, { useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { ChangePasswordProps, State, UseChangePasswordReturn } from './types';
import makeSelectChangePassword from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

export function useChangePassword(): UseChangePasswordReturn {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store: State = useSelector(makeSelectChangePassword(), shallowEqual);

  const submit = useCallback(
    ({
      currentPassword,
      newPassword,
    }: {
      currentPassword?: string;
      newPassword: string;
    }) =>
      dispatch(
        actions.submit({
          currentPassword,
          newPassword,
        }),
      ),
    [],
  );

  const reset = useCallback(() => dispatch(actions.reset()), []);

  return {
    ...store,
    submit,
    reset,
  };
}

export function ChangePassword({ children }: ChangePasswordProps) {
  const store = useChangePassword();
  return store ? children(store) : null;
}

export default React.memo(ChangePassword);
