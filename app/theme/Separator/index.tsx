/**
 *
 * Separator
 *
 */
import React from 'react';

import { View } from 'react-native';
import FormattedMessage from 'theme/FormattedMessage';
import messages from './messages';

import style from './style';

const Separator = () => (
  <View style={style.container}>
    <View style={style.line} />
    <FormattedMessage {...messages.orLabel} style={style.orLabel} />
    <View style={style.line} />
  </View>
);

export default Separator;
