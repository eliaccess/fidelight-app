/*
 *
 * TransactionSection
 *
 */

import React from 'react';
import { View } from 'react-native';

import FormattedMessage from 'theme/FormattedMessage';

import Image from 'theme/Image';
import Section from 'theme/Section';
import Text from 'theme/Text';

import style from './style';
import messages from '../messages';

function TransactionSection(_props) {
  return (
    <View style={style.rewardSectionContainer}>
      <Section
        heading={
          <FormattedMessage {...messages.pastTransactionHeading} isFragment />
        }
      >
        <View style={style.itemWrapper}>
          <View style={style.logoWrapper}>
            <Image title="transactionIcon" style={style.logo} />
          </View>
          <View style={style.contentWrapper}>
            <Text style={style.title}>Coffee from Retro bistro</Text>
            <Text style={style.date}>Feb 21, 2021</Text>
          </View>
          <Text style={style.points}>120 Points</Text>
        </View>
        <View style={style.itemWrapper}>
          <View style={style.logoWrapper}>
            <Image title="transactionIcon" style={style.logo} />
          </View>
          <View style={style.contentWrapper}>
            <Text style={style.title}>Large size pizza from do...</Text>
            <Text style={style.date}>Feb 21, 2021</Text>
          </View>
          <Text style={style.points}>120 Points</Text>
        </View>
      </Section>
    </View>
  );
}

export default React.memo(TransactionSection);
