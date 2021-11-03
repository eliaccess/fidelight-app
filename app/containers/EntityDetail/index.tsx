/**
 *
 * EntityDetail
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { generateDuxKey } from 'fs-frontend-commons';

import { EntityDetailProps, UseEntityDetailProps, StateItem } from './types';
import { selectEntityDetailByKey } from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

function getKeyFromProps(props: UseEntityDetailProps): string {
  return generateDuxKey(props, ['entityId'], true);
}

export function useEntityDetail(props: UseEntityDetailProps): StateItem {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const key = getKeyFromProps(props);
  const dispatch = useDispatch();
  const store: StateItem = useSelector(
    selectEntityDetailByKey(key),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(
      actions.fetch({
        ...props,
        key,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return store;
}

export function EntityDetail({ children, ...props }: EntityDetailProps) {
  const store = useEntityDetail(props);
  return store ? children(store) : null;
}

export default React.memo(EntityDetail);
