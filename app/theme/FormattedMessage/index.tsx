/**
 *
 * FormattedMessage
 *
 */

import React from 'react';
import { useIntl } from 'react-intl';
import Animated from 'react-native-reanimated';
import Text from 'theme/Text';

export function useFormattedMessage(props: {
  id: string;
  values?: any;
  defaultMessage: string;
}): string {
  const { id, values = {}, defaultMessage } = props;
  const intl = useIntl();
  return intl.formatMessage({ id, defaultMessage }, values);
}

interface Props {
  animated?: boolean;
  id: string;
  values?: any;
  Component?: any;
  defaultMessage: string;
  isFragment?: boolean;
  [x: string]: any;
}

const Message: React.FC<Props> = ({
  animated = false,
  id,
  defaultMessage,
  values,
  isFragment,
  ...otherProps
}) => {
  const content = useFormattedMessage({ id, defaultMessage, values });
  const Component = animated ? Animated.Text : Text;
  if (isFragment) {
    return <>{content}</>;
  }
  return <Component {...otherProps}>{content}</Component>;
};

export default Message;
