/**
 *
 * RestaurantLoader
 *
 */
import React from 'react';
import { View } from 'react-native';

import Section, { SectionProps } from 'theme/Section';
import EntityCardLoader from 'components/EntityCard/Loader';

interface RestaurantLoaderProps extends SectionProps {
  numberOfItems: number;
}

const RestaurantLoader: React.FC<RestaurantLoaderProps> = ({
  numberOfItems,
  ...props
}) => (
  <Section heading={props.heading} isLoading>
    <View>
      {Array.from(Array(numberOfItems), (_a, i) => (
        <EntityCardLoader />
      ))}
    </View>
  </Section>
);

export default RestaurantLoader;
