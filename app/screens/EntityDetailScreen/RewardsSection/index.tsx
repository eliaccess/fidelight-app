/*
 *
 * RewardsSection
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

function RewardsSection(_props) {
  return (
    <View style={style.rewardSectionContainer}>
      <Section
        heading={<FormattedMessage {...messages.rewardsHeading} isFragment />}
      >
        <View style={style.itemWrapper}>
          <View style={style.logoWrapper}>
            <Image title="badge" style={style.logo} />
          </View>
          <View style={style.contentWrapper}>
            <Text style={style.title}>Free coffee</Text>
            <Text style={style.shortDescription}>
              4pts to get your free coffee. You’re close!
            </Text>
            <View style={style.progressBarWrapper}>
              <View style={style.activeProgress} />
              <View style={style.progressValueWrapper}>
                <Text style={style.progressValue}>8/10</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={style.itemWrapper}>
          <View style={style.logoWrapper}>
            <Image title="badge" style={style.logo} />
          </View>
          <View style={style.contentWrapper}>
            <Text style={style.title}>Free pizza</Text>
            <Text style={style.shortDescription}>
              4pts to get your free pizz. You’re close!
            </Text>
            <View style={style.progressBarWrapper}>
              <View style={style.activeProgress} />
              <View style={style.progressValueWrapper}>
                <Text style={style.progressValue}>4/6</Text>
              </View>
            </View>
          </View>
        </View>
      </Section>
    </View>
  );
}

export default React.memo(RewardsSection);
