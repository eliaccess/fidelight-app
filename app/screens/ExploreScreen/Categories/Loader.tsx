/**
 *
 * CategoriesWidgetLoader
 *
 */
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSkeletonValue } from 'react-native-animated-skeleton';

import Section, { SectionProps } from 'theme/Section';

import style from './style';

interface CategoriesWidgetLoaderProps extends SectionProps {
  numberOfItems: number;
}

const { interpolate, Extrapolate } = Animated;

const CategoriesWidgetLoader: React.FC<CategoriesWidgetLoaderProps> = ({
  numberOfItems,
  ...props
}) => {
  const progress: Animated.Value<number> = useSkeletonValue();
  const length = numberOfItems;
  const delta = 1 / length;

  return (
    <Section heading={props.heading} isLoading>
      <View style={style.loaderContainer}>
        {Array.from(Array(numberOfItems), (_a, i) => {
          const start = i * delta;
          const end = start + delta;
          const opacity = interpolate(progress, {
            inputRange: [start, end],
            outputRange: [0.4, 1],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View key={i} style={[style.loaderStyle, { opacity }]} />
          );
        })}
      </View>
    </Section>
  );
};

export default CategoriesWidgetLoader;
