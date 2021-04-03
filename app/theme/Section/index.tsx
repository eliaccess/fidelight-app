/**
 *
 * Section
 *
 */
import React from 'react';
import { View } from 'react-native';

import Text from 'theme/Text';

import style from './style';

export interface SectionProps {
  heading?: React.ReactNode | string;
  children?: React.ReactNode;
  headerRight?: React.ReactNode;
  isLoading?: boolean;
}

const Section: React.FC<SectionProps> = (props) => (
  <View style={style.section}>
    {props.heading ? (
      <View style={style.sectionHeader}>
        <Text style={style.sectionHeading} numberOfLines={1}>
          {props.heading}
        </Text>
        {props.headerRight}
      </View>
    ) : null}
    {props.children}
  </View>
);

export default Section;
