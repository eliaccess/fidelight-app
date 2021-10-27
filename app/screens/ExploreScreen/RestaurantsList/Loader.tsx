/**
 *
 * ResturantLoader
 *
 */
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import Section, { SectionProps } from 'theme/Section';
import { useLoaderAnimation } from 'hooks/useLoaderAnimation';

import { useGetStyles } from './style';

interface ResturantLoaderProps extends SectionProps {
  numberOfItems: number;
}

const ResturantLoader: React.FC<ResturantLoaderProps> = ({
  numberOfItems,
  ...props
}) => {
  const animatedStyle = useLoaderAnimation();
  const style = useGetStyles();

  return (
    <Section heading={props.heading} isLoading>
      <View>
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

export default ResturantLoader;
