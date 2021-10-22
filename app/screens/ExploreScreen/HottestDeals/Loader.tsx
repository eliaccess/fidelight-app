/**
 *
 * HottestDealsLoader
 *
 */
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import Section, { SectionProps } from 'theme/Section';
import { useLoaderAnimation } from 'hooks/useLoaderAnimation';

import style from './style';

interface HottestDealsLoaderProps extends SectionProps {
  numberOfItems: number;
}

const HottestDealsLoader: React.FC<HottestDealsLoaderProps> = ({
  numberOfItems,
  ...props
}) => {
  const animatedStyle = useLoaderAnimation();

  return (
    <Section heading={props.heading} isLoading>
      <View style={style.loaderContainer}>
        {Array.from(Array(numberOfItems), (_a, i) => (
          <Animated.View key={i} style={[style.item, animatedStyle]}>
            <Animated.View style={style.logoLoader} />
            <View style={style.contentWrapper}>
              <Animated.View style={style.titleLoader} />
              <Animated.View style={style.shortDescriptionLoader} />
            </View>
          </Animated.View>
        ))}
      </View>
    </Section>
  );
};

export default HottestDealsLoader;
