/*
 *
 * BusinessQRCodeScreen
 *
 */

import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useBusinessTransactions } from 'containers/Business/BusinessTransactions';

import SuccessAnimation from 'components/SuccessAnimation';

import FormattedMessage from 'theme/FormattedMessage';
import TouchFeedback from 'theme/TouchFeedback';
import { useToastContext } from 'theme/Toast';
import Modal from 'theme/Modal';
import Icon from 'theme/Icon';

import { BusinessQRCodeScreenProps } from './types';
import { UseQRCodeAnimation } from './animation';
import UserPointsForm from './UserPointsForm';
import messages from './messages';
import style from './style';

const BusinessQRCodeScreen: React.FC<BusinessQRCodeScreenProps> = (props) => {
  const [showUserPointsForm, setShowUserPointsForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [qrCode, setQrCode] = useState('');

  const animation = useRef(useSharedValue(0)).current;
  const toast = useToastContext();

  const QRCodeAnimation = UseQRCodeAnimation(animation);
  const transactions = useBusinessTransactions();

  useEffect(() => {
    if (transactions.success) {
      toast?.show({
        message: transactions.message,
        delay: 2000,
        type: 'success',
      });
      setShowUserPointsForm(false);
      setShowSuccess(true);
      setTimeout(() => {
        transactions.reset();
        setShowSuccess(false);
        props.navigation.goBack();
      }, 3000);
    }
  }, [transactions]);

  useEffect(() => {
    if (transactions.error) {
      toast?.show({
        message: transactions.message,
        delay: 1200,
        type: 'error',
      });
      transactions.reset();
    }
  }, [transactions.error]);

  useEffect(() => {
    animation.value = withTiming(1, {
      duration: 400,
      easing: Easing.inOut(Easing.ease),
    });
  }, [animation]);

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
  }, [qrCode]);

  return (
    <>
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
          {!showUserPointsForm && !showSuccess ? (
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
      {showSuccess ? <SuccessAnimation /> : null}
    </>
  );
};

export default React.memo(BusinessQRCodeScreen);
