/**
 *
 * BusinessProfile
 *
 */

import React, { useCallback, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import {
  BusinessProfileProps,
  UseBusinessProfileProps,
  State,
  UpdatePropsPayload,
  AddLogoPayload,
  AddBackgroundImagePayload,
  AddSchedulePropsPayload,
} from './types';
import makeSelectBusinessProfile from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

interface BusinessProfileReturn extends State {
  update: (...args: any[]) => any;
  addSchedule: (args: AddSchedulePropsPayload) => any;
  reset: () => void;
  addLogo: (args: AddLogoPayload) => void;
  addBackgroundImage: (args: AddBackgroundImagePayload) => void;
}

export function useBusinessProfile(
  _props?: UseBusinessProfileProps,
): BusinessProfileReturn {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store = useSelector(makeSelectBusinessProfile(), shallowEqual);

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

  const addSchedule = useCallback(
    (payload: AddSchedulePropsPayload) =>
      dispatch(actions.addSchedule(payload)),
    [],
  );

  const addLogo = useCallback((args: AddLogoPayload) => {
    dispatch(
      actions.addLogo({
        ...args,
      }),
    );
  }, []);

  const addBackgroundImage = useCallback((args: AddBackgroundImagePayload) => {
    dispatch(
      actions.addBackgroundImage({
        ...args,
      }),
    );
  }, []);

  const reset = () => dispatch(actions.reset());
  return {
    ...store,
    update,
    reset,
    addLogo,
    addSchedule,
    addBackgroundImage,
  };
}

export function BusinessProfile({ children, ...props }: BusinessProfileProps) {
  const store = useBusinessProfile(props);
  return store ? children(store) : null;
}

export default React.memo(BusinessProfile);
