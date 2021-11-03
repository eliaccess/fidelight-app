/*
 *
 * RestaurantsList
 *
 */

import React from 'react';
import * as Animatable from 'react-native-animatable';

import { useEntities } from 'containers/Entities';
import useStateHandler from 'hooks/useStateHandler';

import FormattedMessage from 'theme/FormattedMessage';
import Section from 'theme/Section';
import EntityCard from 'components/EntityCard';
import { ENTITY_DETAIL } from 'router/routeNames';

import messages from './messages';

import RestaurantLoader from './Loader';

type RestaurantsListProps = {
  navigation: any;
};

function RestaurantsList(props: RestaurantsListProps) {
  const entities = useEntities({
    city: 'Paris',
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

  if (!entities.data) {
    return null;
  }
  return (
    <Animatable.View animation="fadeIn" duration={1500}>
      <Section
        heading={
          <FormattedMessage {...messages.restaurantsHeading} isFragment />
        }
      >
        {entities.data.map((item) => (
          <EntityCard
            onWishListPress={() => {
              entities.toggleFavorite({
                id: item.id,
                isFavorite: item.isFavorite,
              });
            }}
            entity={item}
            onPress={() =>
              props.navigation.navigate(ENTITY_DETAIL, {
                entityId: item.id,
              })
            }
            isFavorite={item.isFavorite}
          />
        ))}
      </Section>
    </Animatable.View>
  );
}

export default React.memo(RestaurantsList);
