/**
 *
 * RecentViewedEntities
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import {
  RecentViewedEntitiesProps,
  UseRecentViewedEntitiesProps,
  State,
  SubmitPayload,
} from './types';
import makeSelectRecentViewedEntities from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

export interface UseRecentViewedEntitiesReturn extends State {
  submit: (args: SubmitPayload) => void;
}

export function useRecentViewedEntities(
  _props?: UseRecentViewedEntitiesProps,
): UseRecentViewedEntitiesReturn {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store = useSelector(makeSelectRecentViewedEntities(), shallowEqual);

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

export function RecentViewedEntities({
  children,
  ...props
}: RecentViewedEntitiesProps) {
  const store = useRecentViewedEntities(props);
  return store ? children(store) : null;
}

export default React.memo(RecentViewedEntities);
