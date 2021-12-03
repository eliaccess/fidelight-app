/**
 *
 * CategoriesWidgetLoader
 *
 */
import { useLoaderAnimation } from 'hooks/useLoaderAnimation';
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import Section, { SectionProps } from 'theme/Section';
import style from './style';

interface CategoriesWidgetLoaderProps extends SectionProps {
  numberOfItems: number;
}

const CategoriesWidgetLoader: React.FC<CategoriesWidgetLoaderProps> = ({
  numberOfItems,
  ...props
}) => {
  const animatedStyle = useLoaderAnimation();

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

export default React.memo(CategoriesWidgetLoader);
