/**
 *
 * RecentSelectedCities
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import {
  RecentSelectedCitiesProps,
  UseRecentSelectedCitiesProps,
  State,
  SubmitPayload,
} from './types';
import makeSelectRecentSelectedCities from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

export interface UseRecentSelectedCitiesReturn extends State {
  submit: (args: SubmitPayload) => void;
}

export function useRecentSelectedCities(
  _props?: UseRecentSelectedCitiesProps,
): UseRecentSelectedCitiesReturn {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store = useSelector(makeSelectRecentSelectedCities(), shallowEqual);

  useEffect(() => {
    if (store?.fetching || store?.data?.length > 0) {
      return;
    }
    dispatch(actions.fetch());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  const submit = (args: SubmitPayload) => {
    dispatch(
      actions.submit({
        ...args,
      }),
    );
  };

  return {
    ...store,
    submit,
  };
}

export function RecentSelectedCities({
  children,
  ...props
}: RecentSelectedCitiesProps) {
  const store = useRecentSelectedCities(props);
  return store ? children(store) : null;
}

export default React.memo(RecentSelectedCities);
