/**
 *
 * UserProfile
 *
 */

import React, { useCallback, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import {
  UserProfileProps,
  UseUserProfileProps,
  State,
  UpdatePropsPayload,
} from './types';
import makeSelectUserProfile from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

interface UserProfileReturn extends State {
  update: (...args: any[]) => any;
  reset: () => void;
}

export function useUserProfile(
  _props?: UseUserProfileProps,
): UserProfileReturn {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store = useSelector(makeSelectUserProfile(), shallowEqual);

  useEffect(() => {
    if (store?.fetching || Object.keys(store?.data).length) {
      return;
    }
    dispatch(actions.fetch());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  const update = useCallback(
    (payload: UpdatePropsPayload) => dispatch(actions.update(payload)),
    [],
  );
  const reset = () => dispatch(actions.reset());
  return {
    ...store,
    update,
    reset,
  };
}

export function UserProfile({ children, ...props }: UserProfileProps) {
  const store = useUserProfile(props);
  return store ? children(store) : null;
}

export default React.memo(UserProfile);
