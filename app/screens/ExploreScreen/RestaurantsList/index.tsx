/*
 *
 * RestaurantsList
 *
 */

import React from 'react';
import * as Animatable from 'react-native-animatable';

import useStateHandler from 'hooks/useStateHandler';
import { ENTITY_DETAIL } from 'router/routeNames';

import { useEntities } from 'containers/Entities';
import { useUserLocation } from 'containers/UserLocation';

import EntityCard from 'components/EntityCard';

import FormattedMessage from 'theme/FormattedMessage';
import Section from 'theme/Section';
import NoResult from 'theme/NoResult';

import messages from './messages';
import RestaurantLoader from './Loader';

type RestaurantsListProps = {
  navigation: any;
  activeCategoryId: number;
};

const RestaurantsList: React.FC<RestaurantsListProps> = (props) => {
  const userLocation = useUserLocation();

  const entities = useEntities({
    city: userLocation.data.cityName,
    type: props.activeCategoryId,
  });

  const showContent = useStateHandler({
    state: entities,
  });

  if (!showContent) {
    return (
      <RestaurantLoader
        heading={
          <FormattedMessage {...messages.restaurantsHeading} isFragment />
        }
        numberOfItems={4}
      />
    );
  }

  return (
    <Animatable.View animation="fadeIn" duration={1500}>
      <Section
        heading={
          <FormattedMessage {...messages.restaurantsHeading} isFragment />
        }
      >
        {entities?.data?.length ? (
          entities?.data?.map((item) => (
            <EntityCard
              key={item.id}
              entity={item}
              onPress={() =>
                props.navigation.navigate(ENTITY_DETAIL, {
                  entityId: item.id,
                })
              }
            />
          ))
        ) : (
          <NoResult message={entities?.message} />
        )}
      </Section>
    </Animatable.View>
  );
};

export default React.memo(RestaurantsList);
