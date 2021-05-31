/**
 *
 * Section
 *
 */
import React from 'react';
import { View } from 'react-native';

import Text from 'theme/Text';
import { Skeleton } from 'react-native-animated-skeleton';

import style from './style';

export interface SectionProps {
  heading?: React.ReactNode | string;
  children?: React.ReactNode;
  headerRight?: React.ReactNode;
  isLoading?: boolean;
  testID?: string;
}

export const HeadingLoader = () => (
  <Skeleton loaderStyle={style.headingLoader} numberOfItems={1} />
);

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
