/**
 *
 * QRCode
 *
 */
import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import Icon from 'theme/Icon';
import TouchFeedback from 'theme/TouchFeedback';
import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Text from 'theme/Text';

import style from './style';
import { UseQRCodeAnimation } from './animation';
import messages from './messages';

interface QRCodeProps {
  visible: boolean;
  onRequestClose: (...args: any[]) => any;
}

function QRCode(props: QRCodeProps) {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: props.visible ? 1 : 0,
      duration: 400,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }, [animation, props.visible]);
  const QRCodeAnimation = UseQRCodeAnimation(animation);

  return (
    <Animated.View style={[style.container, QRCodeAnimation]}>
      <TouchFeedback
        onPress={props.onRequestClose}
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
        <Image title="qrCode" style={style.qrCodeImage} />
        <View style={style.offerDetailWrapper}>
          <Text style={style.offerTitle}>Laziz coffee</Text>
          <Text style={style.offerPoints}>30% OFF + 10% EXTRA POINTS</Text>
          <Text style={style.offerShortDescription}>
            on every medium coffee today
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}
export default QRCode;
