/**
 *
 * Section
 *
 */
import { useLoaderAnimation } from 'hooks/useLoaderAnimation';
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

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
  const animatedStyle = useLoaderAnimation();
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
