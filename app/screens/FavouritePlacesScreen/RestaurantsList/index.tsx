/*
 *
 * RestaurantsList
 *
 */

import React from 'react';
import { View } from 'react-native';

import Image from 'theme/Image';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';
import Icon from 'theme/Icon';

import style from './style';
import Categories from './data';

function RestaurantsList(_props) {
  return (
    <View style={style.container}>
      {Categories.map((item) => (
        <TouchFeedback key={item.id} onPress={() => null} style={style.item}>
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
          <View style={style.favoriteIconWrapper}>
            <Icon name="heart" font="ionicons" style={style.favoriteIcon} />
          </View>
        </TouchFeedback>
      ))}
    </View>
  );
}

export default React.memo(RestaurantsList);
