/**
 *
 * EntityOffersRewards
 *
 */

import React, { useCallback, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { generateDuxKey } from 'fs-frontend-commons';

import {
  EntityOffersRewardsProps,
  UseEntityOffersRewardsProps,
  StateItem,
  SubmitPayload,
  UpdatePayload,
  RemovePayload,
  AddLogoPayload,
} from './types';
import { selectEntityOffersRewardsByKey } from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

function getKeyFromProps(props: UseEntityOffersRewardsProps): string {
  return generateDuxKey(props, ['entityId'], true);
}

interface EntityOffersRewardsReturn extends StateItem {
  submit: (args: SubmitPayload) => void;
  update: (args: UpdatePayload) => void;
  remove: (args: RemovePayload) => void;
  addLogo: (args: AddLogoPayload) => void;
  reset: (...args: any) => void;
}

export function useEntityOffersRewards(
  props: UseEntityOffersRewardsProps,
): EntityOffersRewardsReturn {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const key = getKeyFromProps(props);
  const dispatch = useDispatch();
  const store: StateItem = useSelector(
    selectEntityOffersRewardsByKey(key),
    shallowEqual,
  );

  useEffect(() => {
    if (store?.fetching || store?.data?.rewards || props.entityId === -1) {
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

  const submit = useCallback(
    (args: SubmitPayload) => {
      dispatch(
        actions.submit({
          ...args,
          key,
        }),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key],
  );

  const update = useCallback(
    (args: UpdatePayload) => {
      dispatch(
        actions.update({
          ...args,
          key,
        }),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key],
  );

  const remove = useCallback(
    (args: RemovePayload) => {
      dispatch(
        actions.remove({
          ...args,
          key,
        }),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key],
  );

  const addLogo = useCallback(
    (args: AddLogoPayload) => {
      dispatch(
        actions.addLogo({
          ...args,
          key,
        }),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const reset = useCallback(() => dispatch(actions.reset({ key })), [key]);

  return {
    ...store,
    submit,
    update,
    remove,
    addLogo,
    reset,
  };
}

export function EntityOffersRewards({
  children,
  ...props
}: EntityOffersRewardsProps) {
  const store = useEntityOffersRewards(props);
  return store ? children(store) : null;
}

export default React.memo(EntityOffersRewards);
