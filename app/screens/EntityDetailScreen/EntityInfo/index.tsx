/*
 *
 * EntityDetail EntityInfo
 *
 */

import WishlistButton from 'components/WishlistButton';
import React from 'react';
import { View } from 'react-native';

import Icon from 'theme/Icon';
import Text from 'theme/Text';
import { EntityDetailItemTypes } from 'types/EntityItemTypes';

import style from './style';

type EntityInfoProps = {
  data: EntityDetailItemTypes;
  onWishListPress: (...args: any) => any;
};

function EntityInfo(props: EntityInfoProps) {
  return (
    <View style={style.infoContainer}>
      <View style={style.entityInfoWrapper}>
        <View>
          <Text style={style.name}>{props.data.name} </Text>
          <View style={style.facilitiesWrapper}>
            <Text style={style.facilityIem}>{props.data.description}</Text>
          </View>
        </View>
        <View style={style.favoriteIconWrapper}>
          <WishlistButton
            active={props.data.isFavorite}
            onPress={props.onWishListPress}
          />
        </View>
      </View>

      {/* <View style={style.tagsWrapper}>
        <View style={style.rating}>
          <Icon name="star" style={style.ratingIcon} />
          <Text style={style.ratingValue}>4.1</Text>
        </View>
        <Text style={style.tagSeparator}>.</Text>
        <Text style={style.distance}>29Km</Text>
        <Text style={style.tagSeparator}>.</Text>
        <Text style={style.reviews}>25 Reviews</Text>
      </View> */}
      <View style={style.separationLine} />
      <View style={style.contactInfoContainer}>
        <View style={style.contactInfoItem}>
          <Icon name="map-pin" style={style.contactInfoIcon} />
          <Text style={style.contactInfoItemLabel}>
            {props.data.streetName}
          </Text>
        </View>
        <View style={style.contactInfoItem}>
          <Icon name="phone" style={style.contactInfoIcon} />
          <Text style={style.contactInfoItemLabel}> {props.data.phone}</Text>
        </View>
        <View style={style.contactInfoItem}>
          <Icon name="globe" style={style.contactInfoIcon} />
          <Text style={style.contactInfoItemLabel}>
            {props.data.websiteUrl}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default React.memo(EntityInfo);