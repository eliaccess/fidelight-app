/**
 *
 * Entities
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { generateDuxKey } from 'fs-frontend-commons';

import { EntitiesProps, UseEntitiesProps, StateItem } from './types';
import { selectEntitiesByKey } from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

type toggleFavoriteProps = {
  id: number;
  isFavorite: boolean;
};
interface UseEntitiesReturnProps extends StateItem {
  toggleFavorite: (args: toggleFavoriteProps) => void;
}

function getKeyFromProps(props: UseEntitiesProps): string {
  return generateDuxKey(props, ['city'], true);
}

export function useEntities(props: UseEntitiesProps): UseEntitiesReturnProps {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const key = getKeyFromProps(props);
  const dispatch = useDispatch();
  const store: StateItem = useSelector(selectEntitiesByKey(key), shallowEqual);

  useEffect(() => {
    if (!props.city || store?.data?.length) {
      return;
    }
    dispatch(
      actions.fetch({
        ...props,
        key,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const toggleFavorite = (payload: toggleFavoriteProps) =>
    dispatch(actions.toggleFavorite({ ...payload, key }));

  return {
    ...store,
    toggleFavorite,
  };
}

export function Entities({ children, ...props }: EntitiesProps) {
  const store = useEntities(props);
  return store ? children(store) : null;
}

export default React.memo(Entities);
