/**
 *
 * DealsSectionLoader
 *
 */
import { useLoaderAnimation } from 'hooks/useLoaderAnimation';
import React from 'react';

import Animated from 'react-native-reanimated';

import Section, { SectionProps } from 'theme/Section';
import style from './style';

interface DealsSectionLoaderProps extends SectionProps {}

const DealsSectionLoader: React.FC<DealsSectionLoaderProps> = (props) => {
  const animatedStyle = useLoaderAnimation();

  return (
    <Section heading={props.heading} isLoading>
      <Animated.View style={[style.loaderStyle, animatedStyle]} />
    </Section>
  );
};

export default DealsSectionLoader;
