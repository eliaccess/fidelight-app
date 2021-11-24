/**
 *
 * TransactionsWidgetLoader
 *
 */
import { useLoaderAnimation } from 'hooks/useLoaderAnimation';
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import Section, { SectionProps } from 'theme/Section';

import style from './style';

interface TransactionsWidgetLoaderProps extends SectionProps {
  numberOfItems: number;
}

const TransactionsWidgetLoader: React.FC<TransactionsWidgetLoaderProps> = ({
  numberOfItems,
  ...props
}) => {
  const animatedStyle = useLoaderAnimation();

  return (
    <View style={style.rewardSectionContainer}>
      <Section heading={props.heading} isLoading>
        {Array.from(Array(numberOfItems), (_a, i) => (
          <Animated.View key={i} style={[style.itemWrapper, animatedStyle]}>
            <Animated.View style={style.logoLoader} />
            <View style={style.contentWrapper}>
              <Animated.View style={style.titleLoader} />
              <Animated.View style={style.dateLoader} />
            </View>
          </Animated.View>
        ))}
      </Section>
    </View>
  );
};

export default TransactionsWidgetLoader;
