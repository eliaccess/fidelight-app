/**
 *
 * RecentCard
 *
 */
import React from 'react';
import { View } from 'react-native';

import { EntityDetailItemTypes } from 'types/EntityItemTypes';

import Text from 'theme/Text';
import Image from 'theme/Image';
import TouchFeedback from 'theme/TouchFeedback';

import style from './style';

type RecentCardProps = {
  data: EntityDetailItemTypes;
  onPress: (...args: any[]) => any;
};

const RecentCard: React.FC<RecentCardProps> = (props) => (
  <TouchFeedback style={style.container} onPress={props.onPress}>
    {props.data.logoUrl ? (
      <View style={style.entityCard}>
        <View style={style.entityLogoHolder}>
          <Image
            uri={props.data.logoUrl}
            title="logoThumb"
            style={style.logo}
            resizeMode="cover"
          />
        </View>
        <Text style={style.entityName} numberOfLines={2}>
          {props.data.name}
        </Text>
      </View>
    ) : null}
  </TouchFeedback>
);

export default React.memo(RecentCard);
