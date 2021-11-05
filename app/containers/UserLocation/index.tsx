/**
 *
 * UserLocation
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { UserLocationProps, State } from './types';
import makeSelectUserLocation from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

export function useUserLocation(): State {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store: State = useSelector(makeSelectUserLocation(), shallowEqual);

  useEffect(() => {
    if (!store?.checkedLocal) {
      dispatch(actions.fetch());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...(store || {}),
    setCity: (data) => dispatch(actions.set({ data })),
  };
}

export function useSelectedCity(): ISelectedCityItem {
  const userLocation = useUserLocation();
  return {
    cityName: userLocation?.data?.cityName,
  };
}

export function UserLocation({ children }: UserLocationProps) {
  const store = useUserLocation();
  return store ? children(store) : null;
}

export default React.memo(UserLocation);
