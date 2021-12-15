/**
 *
 * RestaurantsListLoader
 *
 */

import React from 'react';
import { View } from 'react-native';

import Section, { SectionProps } from 'theme/Section';
import EntityCardLoader from 'components/EntityCard/Loader';

interface RestaurantsListLoaderProps extends SectionProps {
  numberOfItems: number;
}

const RestaurantsListLoader: React.FC<RestaurantsListLoaderProps> = ({
  numberOfItems,
  ...props
}) => (
  <Section heading={props.heading} isLoading>
    <View>
      {Array.from(Array(numberOfItems), (_a, i) => (
        <EntityCardLoader key={i} />
      ))}
    </View>
  </Section>
);

export default RestaurantsListLoader;
