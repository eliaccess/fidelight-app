import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { Easing } from 'react-native-reanimated';

import TouchFeedback from 'theme/TouchFeedback';
import Text from 'theme/Text';
import FormattedMessage from 'theme/FormattedMessage';
import { buttonGradientProps } from 'theme/utils';

import style from './style';
import HomeTabView from './TabView';
import { HomeScreenProps } from './types';
import Menu from './Menu';

import messages from './messages';
// import { UseDrawerAnimation, UseDrawerMenuAnimation } from './animations';

function HomeScreen(props: HomeScreenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  // const drawerAnimation = UseDrawerAnimation(animation);
  // const drawerMenuAnimation = UseDrawerMenuAnimation(animation);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isVisible ? 1 : 0,
      duration: 400,
      easing: Easing.cubic,
    }).start();
  }, [animation, isVisible]);

  return (
    <View style={style.container}>
      <View style={style.drawer}>
        <LinearGradient {...buttonGradientProps()} style={style.backdrop} />
        <View style={style.drawerMenu}>
          {Menu.map((item) => (
            <TouchFeedback onPress={() => null} style={style.menuItem}>
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
      </View>

      <Animated.View style={[style.tabViewWrapper]}>
        <HomeTabView
          onPressDrawer={() => setIsVisible(!isVisible)}
          navigation={props.navigation}
        />
      </Animated.View>
    </View>
  );
}

export default React.memo(HomeScreen);
