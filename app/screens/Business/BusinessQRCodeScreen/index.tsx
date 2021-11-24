/*
 *
 * BusinessQRCodeScreen
 *
 */

import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { useBusinessTransactions } from 'containers/Business/BusinessTransactions';

import Icon from 'theme/Icon';
import TouchFeedback from 'theme/TouchFeedback';
import FormattedMessage from 'theme/FormattedMessage';
import { useToastContext } from 'theme/Toast';
import Modal from 'theme/Modal';

import { UseQRCodeAnimation } from './animation';
import messages from './messages';
import style from './style';

import { BusinessQRCodeScreenProps } from './types';

import UserPointsForm from './UserPointsForm';

function BusinessQRCodeScreen(props: BusinessQRCodeScreenProps) {
  const transactions = useBusinessTransactions();
  const [qrCode, setQrCode] = useState('');
  const [showUserPointsForm, setShowUserPointsForm] = useState(false);
  const animation = useRef(useSharedValue(0)).current;
  const toast = useToastContext();

  useEffect(() => {
    if (transactions.success) {
      toast?.show({
        message: transactions.message,
        delay: 500,
        type: 'success',
      });
      transactions.reset();
      props.navigation.goBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions]);

  useEffect(() => {
    if (transactions.error) {
      toast?.show({
        message: transactions.message,
        delay: 1200,
        type: 'error',
      });
      transactions.reset();
      // props.navigation.goBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions.error]);

  useEffect(() => {
    animation.value = withTiming(1, {
      duration: 400,
      easing: Easing.inOut(Easing.ease),
    });
  }, [animation]);
  const QRCodeAnimation = UseQRCodeAnimation(animation);

  useEffect(() => {
    if (qrCode) {
      if (qrCode.split('.').length === 2) {
        setShowUserPointsForm(true);
        return;
      }
      transactions.giveReward({
        data: {
          user: `${`${qrCode.split('.')[0]}.${qrCode.split('.')[1]}`}`,
          discount: qrCode.split('.')[2],
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qrCode]);

  return (
    <Animated.View style={[style.container, QRCodeAnimation]}>
      <TouchFeedback
        onPress={() => props.navigation.goBack()}
        style={style.closeButtonHolder}
      >
        <Icon name="x" style={style.closeIcon} />
      </TouchFeedback>
      <View style={style.background1} />
      <View style={style.background2} />

      <View style={style.content}>
        <View>
          <FormattedMessage
            {...messages.qrCodeHeading}
            style={style.qrCodeHeading}
          />
          <FormattedMessage
            {...messages.scanToAvailLabel}
            style={style.scanToAvailLabel}
          />
        </View>
        {!showUserPointsForm ? (
          <QRCodeScanner
            onRead={(t) => {
              setQrCode(t.data);
            }}
            showMarker
          />
        ) : null}
      </View>
      <Modal
        visible={showUserPointsForm}
        onRequestClose={() => {
          setShowUserPointsForm(false);
          setQrCode('');
        }}
      >
        <UserPointsForm
          onSubmit={(value) => {
            transactions.givePointsAsPolicy({
              data: {
                user: qrCode,
                value,
              },
            });
          }}
        />
      </Modal>
    </Animated.View>
  );
}

export default React.memo(BusinessQRCodeScreen);
