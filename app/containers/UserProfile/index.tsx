/**
 *
 * UserProfile
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { UserProfileProps, UseUserProfileProps, State } from './types';
import makeSelectUserProfile from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

export function useUserProfile(_props?: UseUserProfileProps): State {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store = useSelector(makeSelectUserProfile(), shallowEqual);

  useEffect(() => {
    if (store?.fetching || store?.data?.length > 0) {
      return;
    }
    dispatch(actions.fetch());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return store;
}

export function UserProfile({ children, ...props }: UserProfileProps) {
  const store = useUserProfile(props);
  return store ? children(store) : null;
}

export default React.memo(UserProfile);
