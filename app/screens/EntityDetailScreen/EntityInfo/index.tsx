/*
 *
 * EntityDetail EntityInfo
 *
 */

import React from 'react';
import { View } from 'react-native';

import Icon from 'theme/Icon';
import Text from 'theme/Text';

import style from './style';

function EntityInfo(_props) {
  return (
    <View style={style.infoContainer}>
      <Text style={style.name}>Alfredo Positano coffee </Text>
      <View style={style.facilitiesWrapper}>
        <Text style={style.facilityIem}>Coffee</Text>
      </View>
      <View style={style.tagsWrapper}>
        <View style={style.rating}>
          <Icon name="star" style={style.ratingIcon} />
          <Text style={style.ratingValue}>4.1</Text>
        </View>
        <Text style={style.tagSeparator}>.</Text>
        <Text style={style.distance}>29Km</Text>
        <Text style={style.tagSeparator}>.</Text>
        <Text style={style.reviews}>25 Reviews</Text>
      </View>
      <View style={style.separationLine} />
      <View style={style.contactInfoContainer}>
        <View style={style.contactInfoItem}>
          <Icon name="map-pin" style={style.contactInfoIcon} />
          <Text style={style.contactInfoItemLabel}>
            7 bis Rue de Boulainvilliers, 75016 Paris, France
          </Text>
        </View>
        <View style={style.contactInfoItem}>
          <Icon name="phone" style={style.contactInfoIcon} />
          <Text style={style.contactInfoItemLabel}>+423432532672</Text>
        </View>
        <View style={style.contactInfoItem}>
          <Icon name="globe" style={style.contactInfoIcon} />
          <Text style={style.contactInfoItemLabel}>www.katsui.com</Text>
        </View>
      </View>
    </View>
  );
}

export default React.memo(EntityInfo);
