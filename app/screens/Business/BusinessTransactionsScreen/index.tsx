/*
 *
 * BusinessTransactionsScreen
 *
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { buttonGradientProps } from 'theme/utils';

import TouchFeedback from 'theme/TouchFeedback';
import Icon from 'theme/Icon';
import Text from 'theme/Text';
import Modal from 'theme/Modal';
import FormattedMessage from 'theme/FormattedMessage';

import TransactionSection from './TransactionSection';
import style from './style';
import messages from './messages';
import { BusinessTransactionsScreenProps } from './types';
import CreateGiftForm from './CreateGiftForm';

function BusinessTransactionsScreen(_props: BusinessTransactionsScreenProps) {
  const [showCreateGift, setShowCreateGift] = useState(false);
  return (
    <>
      <View style={style.header}>
        <LinearGradient {...buttonGradientProps()} style={style.backdrop} />
        <View style={style.iconsWrapper}>
          <TouchFeedback onPress={() => null} style={style.menuIconWrapper}>
            <Icon name="menu" style={style.menuIcon} />
          </TouchFeedback>
          <Text style={style.entityName}>Alfredo poistano coffee</Text>
          <View />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainerStyle}
      >
        <TransactionSection />
      </ScrollView>
      <TouchFeedback
        onPress={() => setShowCreateGift(true)}
        style={style.addButtonWrapper}
      >
        <Icon name="gift" font="fidelight" style={style.addIcon} />
      </TouchFeedback>
      <Modal
        visible={showCreateGift}
        onRequestClose={() => setShowCreateGift(false)}
      >
        <View style={style.modalContent}>
          <FormattedMessage
            {...messages.createGiftHeading}
            style={style.modalHeading}
          />
          <CreateGiftForm onSubmit={() => null} />
        </View>
      </Modal>
    </>
  );
}

export default React.memo(BusinessTransactionsScreen);
