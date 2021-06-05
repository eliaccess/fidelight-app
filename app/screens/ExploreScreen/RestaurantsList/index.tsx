/*
 *
 * RestaurantsList
 *
 */

import React from 'react';
import { View } from 'react-native';

import { useResturants } from 'containers/Resturants';
import useStateHandler from 'hooks/useStateHandler';

import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Section from 'theme/Section';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';

import messages from './messages';
import style from './style';
import ResturantLoader from './Loader';

function RestaurantsList(props) {
  const restaurants = useResturants({
    city: 'Paris',
  });

  const showContent = useStateHandler({
    state: restaurants,
  });

  if (!showContent) {
    return (
      <ResturantLoader
        heading={
          <FormattedMessage {...messages.restaurantsHeading} isFragment />
        }
        numberOfItems={4}
      />
    );
  }

  if (!restaurants.data) {
    return null;
  }
  return (
    <Section
      heading={<FormattedMessage {...messages.restaurantsHeading} isFragment />}
    >
      {restaurants.data.map((item) => (
        <TouchFeedback key={item.id} onPress={props.onPress} style={style.item}>
          <View style={style.imageWrapper}>
            <Image
              uri={item.coverImage}
              style={style.coverImage}
              resizeMode="cover"
            />
            <View style={style.logoWrapper}>
              <Image uri={item.logo} style={style.logo} resizeMode="cover" />
            </View>
          </View>

          <View style={style.contentWrapper}>
            <Text style={style.title}>{item.name}</Text>
            <Text style={style.shortDescription} numberOfLines={1}>
              {item.shortDescription}
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
