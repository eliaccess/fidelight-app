/*
 *
 * RestaurantsList
 *
 */

import React from 'react';
import { View } from 'react-native';

import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Section from 'theme/Section';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';
import Icon from 'theme/Icon';

import messages from './messages';
import style from './style';
import Categories from './data';

function RestaurantsList(_props) {
  return (
    <Section
      heading={<FormattedMessage {...messages.restaurantsHeading} isFragment />}
    >
      {Categories.map((item) => (
        <TouchFeedback onPress={() => null} style={style.item}>
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
            <View style={style.tagsWrapper}>
              <View style={style.rating}>
                <Icon name="star" style={style.ratingIcon} />
                <Text style={style.ratingValue}>{item.rating}</Text>
                <Text style={style.tagSeparator}>.</Text>
                <Text style={style.distance}>{item.distance}</Text>
              </View>
            </View>
          </View>
        </TouchFeedback>
      ))}
    </Section>
  );
}

export default React.memo(RestaurantsList);