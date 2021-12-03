/*
 *
 * EntityCard
 *
 */

import React from 'react';
import { View } from 'react-native';

import { EntityItemTypes } from 'types/EntityItemTypes';

import WishlistButton from 'components/WishlistButton';
import Image from 'theme/Image';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';

import style from './style';

interface EntityCardProps {
  entity: EntityItemTypes;
  onPress: (...args: any[]) => any;
  onWishListPress?: (...args: any) => any;
  isFavorite?: boolean;
  showWishList?: boolean;
}

function EntityCard({
  entity,
  onPress,
  onWishListPress = () => null,
  isFavorite = false,
  showWishList = false,
}: EntityCardProps) {
  return (
    <TouchFeedback key={entity.id} onPress={onPress} style={style.item}>
      <View style={style.imageWrapper}>
        <Image uri={entity.logoUrl} style={style.logo} resizeMode="cover" />
      </View>

      <View style={style.contentWrapper}>
        <Text style={style.title}>{entity.name}</Text>
        <Text style={style.shortDescription} numberOfLines={2}>
          {entity.description}
        </Text>
      </View>

      {showWishList ? (
        <WishlistButton active={isFavorite} onPress={onWishListPress} />
      ) : null}
    </TouchFeedback>
  );
}

export default React.memo(EntityCard);
