/*
 *
 * RestaurantsList
 *
 */

import React from 'react';
import { View } from 'react-native';

import { useEntities } from 'containers/Entities';
import useStateHandler from 'hooks/useStateHandler';

import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Section from 'theme/Section';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';

import messages from './messages';
import { useGetStyles } from './style';
import RestaurantLoader from './Loader';

function RestaurantsList(props) {
  const style = useGetStyles();
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
    <Section
      heading={<FormattedMessage {...messages.restaurantsHeading} isFragment />}
    >
      {entities.data.map((item) => (
        <TouchFeedback
          key={item.companyId}
          onPress={props.onPress}
          style={style.item}
        >
          <View style={style.imageWrapper}>
            <Image uri={item.logoLink} style={style.logo} resizeMode="cover" />
          </View>

          <View style={style.contentWrapper}>
            <Text style={style.title}>{item.companyName}</Text>
            <Text style={style.shortDescription} numberOfLines={2}>
              {item.description}
            </Text>
            {/* <View style={style.tagsWrapper}>
              <View style={style.rating}>
                <Icon name="star" style={style.ratingIcon} />
                <Text style={style.ratingValue}>{item.rating}</Text>
              </View>
              <Text style={style.tagSeparator}>.</Text>
              <Text style={style.distance}>{item.distance}</Text>
            </View> */}
          </View>
        </TouchFeedback>
      ))}
    </Section>
  );
}

export default React.memo(RestaurantsList);
