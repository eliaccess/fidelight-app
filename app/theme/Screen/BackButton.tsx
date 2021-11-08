/**
 *
 * BackButton
 *
 */
import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'theme/Icon';
import TouchFeedback from 'theme/TouchFeedback';
import FormattedMessage from 'theme/FormattedMessage';
import { Warn } from 'platform/Logger';

import messages from './messages';

import style from './style';

type BackButtonProps = {
  onBackPress?: (...args: any[]) => any;
  dark: boolean;
};

const BackButton: React.FC<BackButtonProps> = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => backHandler.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackPress = (): boolean => {
    try {
      if (props.onBackPress) {
        props.onBackPress();
        return true;
      }

      navigation.goBack();
      return true;
    } catch (e) {
      Warn(e);
      return true;
    }
  };

  return (
    <TouchFeedback style={style.backButton} onPress={handleBackPress}>
      <Icon
        name="chevron-left"
        style={[style.backButtonIcon, props.dark ? style.darkStyle : null]}
      />
      <FormattedMessage
        {...messages.backLabel}
        style={[style.backLabel, props.dark ? style.darkStyle : null]}
      />
    </TouchFeedback>
  );
};

export default BackButton;
