/**
 *
 * BusinessEarningPolicies
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import {
  BusinessEarningPoliciesProps,
  UseBusinessEarningPoliciesProps,
  State,
  SubmitPayload,
} from './types';
import makeSelectBusinessEarningPolicies from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

export interface UseBusinessEarningPoliciesReturn extends State {
  submit: (args: SubmitPayload) => void;
  reset: () => void;
}

export function useBusinessEarningPolicies(
  props: UseBusinessEarningPoliciesProps,
): UseBusinessEarningPoliciesReturn {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store = useSelector(makeSelectBusinessEarningPolicies(), shallowEqual);

  useEffect(() => {
    if (store?.fetching || store?.data?.length > 0) {
      return;
    }
    dispatch(actions.fetch({ ...props }));
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  const submit = (args: SubmitPayload) => {
    dispatch(
      actions.submit({
        ...args,
      }),
    );
  };

  const reset = () => dispatch(actions.reset());

  return {
    ...store,
    submit,
    reset,
  };
}

export function BusinessEarningPolicies({
  children,
  ...props
}: BusinessEarningPoliciesProps) {
  const store = useBusinessEarningPolicies(props);
  return store ? children(store) : null;
}

export default React.memo(BusinessEarningPolicies);
