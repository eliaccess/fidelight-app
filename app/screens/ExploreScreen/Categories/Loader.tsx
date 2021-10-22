/**
 *
 * CategoriesWidgetLoader
 *
 */
import React from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
// import { useSkeletonValue } from 'react-native-animated-skeleton';

import Section, { SectionProps } from 'theme/Section';

import style from './style';

interface CategoriesWidgetLoaderProps extends SectionProps {
  numberOfItems: number;
}

const CategoriesWidgetLoader: React.FC<CategoriesWidgetLoaderProps> = ({
  numberOfItems,
  ...props
}) => {
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

  return (
    <Section heading={props.heading} isLoading>
      <View style={style.loaderContainer}>
        {Array.from(Array(numberOfItems), (_a, i) => (
          <Animated.View key={i} style={[style.loaderStyle, animatedStyle]} />
        ))}
      </View>
    </Section>
  );
};

export default CategoriesWidgetLoader;
