/*
 *
 * EntityDetailScreen
 *
 */

import React, { useState } from 'react';
import { View } from 'react-native';

import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Modal from 'theme/Modal';

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
  const [showDealDetail, setShowDealDetail] = useState(false);
  return (
    <Screen
      testID="EntityDetailScreen"
      headerVisibilityThreshold={80}
      scrollEnabled={!showDealDetail}
    >
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
          <DealsSection onPress={() => setShowDealDetail(true)} />
        </View>
        <RewardsSection />
      </View>
      <Modal
        onRequestClose={() => setShowDealDetail(false)}
        visible={showDealDetail}
      >
        <View style={style.modalHeader}>
          <Text style={style.dealTitle}>30% OFF</Text>
          <Text style={style.dealShortDescription}>
            on every medium pizza today
          </Text>
          <Image title="dealImage" style={style.dealImage} />
        </View>
        <View style={style.modalContent}>
          <View style={style.dealValidDateWrapper}>
            <Text style={style.dealValidDate}>Valid Til 12th Jan, 2020</Text>
          </View>
          <View style={style.dealDetailWrapper}>
            <FormattedMessage
              {...messages.offerDetailLabel}
              style={style.offerDetailLabel}
            />
            <Text style={style.dealDetail}>
              If you have any idea or wanting to merge some pages let us know.
              We will be delighted togive you more information on any point.
            </Text>
          </View>
        </View>
      </Modal>
    </Screen>
  );
}

export default React.memo(EntityDetailScreen);
