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
import { EntityDetailItemTypes } from 'types/EntityItemTypes';
import style from './style';

type EntityHeaderProps = {
  data: EntityDetailItemTypes;
};

function EntityHeader(props: EntityHeaderProps) {
  return (
    <View style={style.container}>
      <Image
        uri={props.data.backgroundPicture}
        style={style.coverImage}
        resizeMode="cover"
      />
      <View style={style.content}>
        <View style={style.logoWrapper}>
          <Image
            uri={props.data.logoUrl}
            style={style.logo}
            resizeMode="cover"
          />
        </View>
        <View style={style.userPointsWrapper}>
          <Icon name="star" style={style.pointIcon} />
          <Text style={style.pointsLabel}>{props.data.userPoints} Points</Text>
        </View>
      </View>
    </View>
  );
}

export default React.memo(EntityHeader);