/*
 *
 * DealDetailScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Modal from 'theme/Modal';
import Text from 'theme/Text';

import messages from './messages';
import style from './style';

import { DealDetailScreenProps } from './types';

function DealDetailScreen(props: DealDetailScreenProps) {
  return (
    <View style={style.container}>
      <Modal
        onRequestClose={() => {
          props.navigation.goBack();
        }}
        visible={true}
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
    </View>
  );
}

export default React.memo(DealDetailScreen);
