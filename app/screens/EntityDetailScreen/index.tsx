/*
 *
 * EntityDetailScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import FormattedMessage from 'theme/FormattedMessage';

import Screen from 'theme/Screen';
import Text from 'theme/Text';

import DealsSection from './DealsSection';
import EntityInfo from './EntityInfo';
import EntityHeader from './Header';
import messages from './messages';
import RewardsSection from './RewardsSection';
import style from './style';

import { EntityDetailScreenProps } from './types';

function EntityDetailScreen(_props: EntityDetailScreenProps) {
  return (
    <Screen testID="EntityDetailScreen" headerVisibilityThreshold={80}>
      <View style={style.container}>
        <EntityHeader />
        <EntityInfo />
        <View style={style.timingsContainer}>
          <View style={style.timeItem}>
            <FormattedMessage
              {...messages.openLabel}
              style={style.timeHeading}
            />

            <Text style={style.timeValue}>- 7Pm</Text>
          </View>
          <View style={style.tagSeparator} />
          <View style={style.timeItem}>
            <FormattedMessage
              {...messages.closesLabel}
              style={style.timeHeading}
            />
            <Text style={style.timeValue}>- 2:30PM</Text>
          </View>
        </View>
        <View style={style.sectionWrapper}>
          <DealsSection />
        </View>
        <RewardsSection />
      </View>
    </Screen>
  );
}

export default React.memo(EntityDetailScreen);
