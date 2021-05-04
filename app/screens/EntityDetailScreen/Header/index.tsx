/*
 *
 * EntityHeader
 *
 */

import React from 'react';
import { View } from 'react-native';
import Icon from 'theme/Icon';

import Image from 'theme/Image';
import Text from 'theme/Text';
import style from './style';

function EntityHeader(_props) {
  return (
    <View style={style.container}>
      <Image title="coverImage" style={style.coverImage} resizeMode="cover" />
      <View style={style.favoriteIconWrapper}>
        <Icon name="heart" font="ionicons" style={style.favoriteIcon} />
      </View>
      <View style={style.content}>
        <View style={style.logoWrapper}>
          <Image
            uri="https://ebenisteriealfredo.com/adminRev2018-B/images/newsImg/1479758183.jpg"
            style={style.logo}
            resizeMode="cover"
          />
        </View>
        <View style={style.userPointsWrapper}>
          <Icon name="star" style={style.pointIcon} />
          <Text style={style.pointsLabel}> 9 Points</Text>
        </View>
      </View>
    </View>
  );
}

export default React.memo(EntityHeader);
