/**
 *
 * Screen
 *
 */
import React, { useRef } from 'react';
import { View, ScrollView } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import Header from './Header';
import Footer from './Footer';
import style from './style';

interface ScreenProps {
  useScrollView?: boolean;
  blockBackPress?: boolean;
  contentContainerStyle?: number | object;
  headerTitle?: string | React.ReactNode;
  onBackPress?: any;
  testID: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  headerVisibilityThreshold?: number;
  dark?: boolean;
  [x: string]: any;
  scrollEnabled?: boolean;
}

const Screen: React.FC<ScreenProps> = ({
  headerVisibilityThreshold = 0,
  useScrollView = true,
  scrollEnabled = true,
  dark = false,
  ...props
}) => {
  const contentContainer: any = useRef();

  const visibleValue = useRef(
    new Animated.Value(headerVisibilityThreshold >= 0 ? 0 : 1),
  ).current;

  const onScroll = ({
    nativeEvent: {
      contentOffset: { y },
    },
  }) => {
    if (!headerVisibilityThreshold) {
      return;
    }
    Animated.timing(visibleValue, {
      toValue: y > headerVisibilityThreshold ? 1 : 0,
      duration: 400,
      easing: Easing.inOut(Easing.ease),
    }).start();
  };

  const ContentWrapper: any = useScrollView ? ScrollView : View;
  const contentWrapperProps = useScrollView
    ? {
        testID: props.testID,
        onScroll,
        scrollEventThrottle: 32,
        keyboardShouldPersistTaps: 'handled',
        contentContainerStyle: [
          style.scrollContentContainer,
          props.contentContainerStyle,
        ],
        showsVerticalScrollIndicator: false,
        scrollEnabled,
      }
    : {};

  return (
    <>
      <Header
        title={props.headerTitle}
        visibleValue={visibleValue}
        onBackPress={props.onBackPress}
        blockBackPress={props.blockBackPress}
        dark={dark}
        isAnimated={headerVisibilityThreshold > 0}
      />
      <View style={style.contentWrapper}>
        <ContentWrapper
          testID={props.testID}
          style={[!useScrollView ? style.contentHolder : null]}
          key="scroll"
          ref={contentContainer}
          {...contentWrapperProps}
        >
          {props.children}
        </ContentWrapper>
      </View>
      {props.footer ? <Footer key="footer">{props.footer}</Footer> : null}
    </>
  );
};

export default React.memo(Screen);
