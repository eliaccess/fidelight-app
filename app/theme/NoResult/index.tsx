/**
 *
 * NoResult
 *
 */
import React from 'react';
import { View, StyleSheet } from 'react-native';

import FormattedMessage from 'theme/FormattedMessage';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';
import Colors from 'theme/Colors';
import Button from 'theme/Button';
import Text from 'theme/Text';

import messages from './messages';

const style = StyleSheet.create({
  container: {
    width: Dimensions.screenWidth - Dimensions.space8x,
    margin: Dimensions.space4x,
    padding: Dimensions.space4x,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    ...elevation(2),
  },
  messageLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textBlack,
    marginBottom: Dimensions.space4x,
    textAlign: 'center',
  },
});

interface INoResult {
  message?: string | React.ReactNode;
  actionLabel?: string | React.ReactNode;
  actionPress?: () => void;
}

const NoResult: React.FC<INoResult> = ({
  message = <FormattedMessage {...messages.msg} isFragment />,
  actionLabel = <FormattedMessage {...messages.reset} />,
  actionPress = null,
}) => (
  <View style={style.container}>
    <Text style={style.messageLabel}>{message}</Text>
    {actionPress ? <Button label={actionLabel} onPress={actionPress} /> : null}
  </View>
);

export default NoResult;
