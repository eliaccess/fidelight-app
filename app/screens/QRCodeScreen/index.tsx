/*
 *
 * QRCodeScreen
 *
 */

import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import QRCode from 'react-native-qrcode-svg';

import { useHotDealDetail } from 'containers/HotDealDetail';

import Icon from 'theme/Icon';
import TouchFeedback from 'theme/TouchFeedback';
import FormattedMessage from 'theme/FormattedMessage';
import Text from 'theme/Text';

import { UseQRCodeAnimation } from './animation';
import messages from './messages';
import style from './style';

import { QRCodeScreenProps } from './types';

function QRCodeScreen(props: QRCodeScreenProps) {
  const dealDetail = useHotDealDetail({
    dealId: props.route.params?.rewardId || -1,
  });

  const animation = useRef(useSharedValue(0)).current;
  useEffect(() => {
    animation.value = withTiming(1, {
      duration: 400,
      easing: Easing.inOut(Easing.ease),
    });
  }, [animation]);
  const QRCodeAnimation = UseQRCodeAnimation(animation);

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
        <QRCode value={props.route.params.qrValue} size={200} />
        <View style={style.offerDetailWrapper}>
          <Text style={style.offerTitle}>{dealDetail?.data?.name}</Text>
          <Text style={style.offerPoints}>{dealDetail?.data?.product}</Text>
          <Text style={style.offerShortDescription}>
            {dealDetail?.data?.description}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}

export default React.memo(QRCodeScreen);
