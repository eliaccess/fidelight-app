/*
 *
 * TransactionSection
 *
 */

import React from 'react';
import { View } from 'react-native';

import FormattedMessage from 'theme/FormattedMessage';

import Section from 'theme/Section';
import Text from 'theme/Text';

import style from './style';
import messages from '../messages';

function TransactionSection(_props) {
  return (
    <View style={style.container}>
      <Section
        heading={
          <FormattedMessage {...messages.transactionHeading} isFragment />
        }
      >
        <View style={style.itemWrapper}>
          <View style={style.contentWrapper}>
            <Text style={style.title}>Coffee from Retro bistro</Text>
            <Text style={style.date}>Feb 21, 2021</Text>
          </View>
          <View style={style.pointsWrapper}>
            <Text style={style.points}>120 Points given</Text>
          </View>
        </View>
        <View style={style.itemWrapper}>
          <View style={style.contentWrapper}>
            <Text style={style.title}>Large size pizza from do...</Text>
            <Text style={style.date}>Feb 21, 2021</Text>
          </View>
          <View style={style.pointsWrapper}>
            <Text style={style.points}>240 Points given</Text>
          </View>
        </View>
      </Section>
    </View>
  );
}

export default React.memo(TransactionSection);
