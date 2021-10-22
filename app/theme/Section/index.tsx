/**
 *
 * Section
 *
 */
import React from 'react';
import { View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import Text from 'theme/Text';

import style from './style';

export interface SectionProps {
  heading?: React.ReactNode | string;
  children?: React.ReactNode;
  headerRight?: React.ReactNode;
  isLoading?: boolean;
  testID?: string;
}

export const HeadingLoader = () => {
  const shared = useSharedValue(0);

  React.useEffect(() => {
    shared.value = withRepeat(
      withTiming(1, { duration: 1000 }),
      Infinity,
      true,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(shared.value, [0, 1], [0.2, 1]),
  }));
  return <Animated.View style={[style.headingLoader, animatedStyle]} />;
};

const Section: React.FC<SectionProps> = (props) => (
  <View style={style.section} testID={props.testID}>
    {props.heading ? (
      <View style={style.sectionHeader}>
        {props.isLoading ? (
          <HeadingLoader />
        ) : (
          <>
            <Text style={style.sectionHeading} numberOfLines={1}>
              {props.heading}
            </Text>
            {props.headerRight}
          </>
        )}
      </View>
    ) : null}
    {props.children}
  </View>
);

export default Section;
