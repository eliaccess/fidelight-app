/* eslint-disable no-fallthrough */
import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Easing,
  // useSharedValue,
  // withTiming,
} from 'react-native-reanimated';

import TouchFeedback from 'theme/TouchFeedback';
import Text from 'theme/Text';
import FormattedMessage from 'theme/FormattedMessage';
import Modal from 'theme/Modal';
import Icon from 'theme/Icon';
import { PREFERENCE, SUPPORT } from 'router/routeNames';
import { buttonGradientProps } from 'theme/utils';

import style from './style';
import HomeTabView from './TabView';
import { HomeScreenProps } from './types';
import Menu from './Menu';

import messages from './messages';
import { UseDrawerAnimation, UseDrawerMenuAnimation } from './animations';

function HomeScreen(props: HomeScreenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const drawerAnimation = UseDrawerAnimation(animation);
  const drawerMenuAnimation = UseDrawerMenuAnimation(animation);
  const [showTerms, setShowTerms] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  useEffect(() => {
    Animated.timing(animation, {
      toValue: isVisible ? 1 : 0,
      duration: 400,
      easing: Easing.cubic,
    }).start();
  }, [animation, isVisible]);

  return (
    <View style={style.container}>
      <Animated.View style={[style.drawer, drawerMenuAnimation]}>
        <LinearGradient {...buttonGradientProps()} style={style.backdrop} />
        <View style={[style.drawerMenu]}>
          {Menu.map((item) => (
            <TouchFeedback
              key={item.id}
              onPress={() => {
                setIsVisible(false);
                switch (item.routeName) {
                  case 'Terms':
                    setShowTerms(true);
                    return;
                  case 'Contactus':
                    setShowContactInfo(true);
                    return;
                  case PREFERENCE:
                    props.navigation.navigate(PREFERENCE);
                    return;
                  case SUPPORT:
                    props.navigation.navigate(SUPPORT);
                }
              }}
              style={style.menuItem}
            >
              <Text style={style.menuItemLabel}>{item.name}</Text>
            </TouchFeedback>
          ))}
        </View>
        <TouchFeedback style={style.authButtonHolder}>
          <FormattedMessage
            {...messages.logoutButtonLable}
            style={style.logoutButtonLable}
          />
        </TouchFeedback>
      </Animated.View>

      <Animated.View style={[style.container, drawerAnimation]}>
        <HomeTabView
          onPressDrawer={() => setIsVisible(!isVisible)}
          navigation={props.navigation}
        />
      </Animated.View>

      <Modal visible={showTerms} onRequestClose={() => setShowTerms(false)}>
        <View style={style.modalContent}>
          <FormattedMessage
            {...messages.termsHeading}
            style={style.modalHeading}
          />
          <Text style={style.terms}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </Text>
          <Text style={style.terms}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </Text>
        </View>
      </Modal>
      <Modal
        visible={showContactInfo}
        onRequestClose={() => setShowContactInfo(false)}
      >
        <View style={style.modalContent}>
          <FormattedMessage
            {...messages.contactUsHeading}
            style={style.modalHeading}
          />
          <View style={style.contactInfoContainer}>
            <View style={style.contactInfoItem}>
              <Icon name="map-pin" style={style.contactInfoIcon} />
              <Text style={style.contactInfoItemLabel}>
                Axalta Coating Systems, 1 Allée de Chantereine, 78711
                Mantes-la-Ville, France
              </Text>
            </View>
            <View style={style.contactInfoItem}>
              <Icon name="phone" style={style.contactInfoIcon} />
              <Text style={style.contactInfoItemLabel}>+423432532672</Text>
            </View>
            <View style={style.contactInfoItem}>
              <Icon name="mail" style={style.contactInfoIcon} />
              <Text style={style.contactInfoItemLabel}>
                Contact@Fidlight.com
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default React.memo(HomeScreen);
