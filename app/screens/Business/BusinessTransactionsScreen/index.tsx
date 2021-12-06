/*
 *
 * BusinessTransactionsScreen
 *
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import FormattedMessage from 'theme/FormattedMessage';
import TouchFeedback from 'theme/TouchFeedback';
import Icon from 'theme/Icon';
import Modal from 'theme/Modal';

import { BusinessTransactionsScreenProps } from './types';
import TransactionSection from './TransactionSection';
import CreateGiftForm from './CreateGiftForm';
import messages from './messages';
import style from './style';

const BusinessTransactionsScreen: React.FC<BusinessTransactionsScreenProps> = (
  _props,
) => {
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
};

export default React.memo(BusinessTransactionsScreen);
