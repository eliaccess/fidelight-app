/*
 *
 * EntityDetail EntityInfo
 *
 */

import React from 'react';
import { View } from 'react-native';

import Icon from 'theme/Icon';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';

import style from './style';

type EntityInfoProps = {
  data: IBusinessUser;
  onEditPress: () => void;
};

function EntityInfo(props: EntityInfoProps) {
  return (
    <View style={style.infoContainer}>
      <View style={style.entityInfoWrapper}>
        <View style={style.nameDescriptionWrapper}>
          <Text style={style.name}>{props.data.name} </Text>
          <Text style={style.description}>{props.data.description}</Text>
        </View>
        <TouchFeedback
          onPress={props.onEditPress}
          style={style.editIconWrapper}
        >
          <Icon name="edit" style={style.editIcon} />
        </TouchFeedback>
      </View>

      <View style={style.separationLine} />
      <View style={style.contactInfoContainer}>
        <View style={style.contactInfoItem}>
          <Icon name="map-pin" style={style.contactInfoIcon} />
          <Text style={style.contactInfoItemLabel}>
            {props.data?.streetName}, {props.data?.streetNumber} ,{' '}
            {props.data?.city} , {props.data?.country}
          </Text>
        </View>
        <View style={style.contactInfoItem}>
          <Icon name="phone" style={style.contactInfoIcon} />
          <Text style={style.contactInfoItemLabel}> {props.data.phone}</Text>
        </View>
        {props.data.websiteUrl ? (
          <View style={style.contactInfoItem}>
            <Icon name="globe" style={style.contactInfoIcon} />
            <Text style={style.contactInfoItemLabel}>
              {props.data.websiteUrl}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

export default React.memo(EntityInfo);
