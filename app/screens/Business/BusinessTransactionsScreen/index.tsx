/*
 *
 * BusinessTransactionsScreen
 *
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import TouchFeedback from 'theme/TouchFeedback';
import Icon from 'theme/Icon';

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
          <CreateGiftForm
            onSubmit={() => null}
            onRequestClose={() => setShowCreateGift(false)}
          />
        </View>
      </Modal>
    </>
  );
}

export default React.memo(BusinessTransactionsScreen);
