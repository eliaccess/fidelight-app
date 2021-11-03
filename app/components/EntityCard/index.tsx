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

import { useGetStyles } from './style';

interface EntityCardProps {
  entity: EntityItemTypes;
  onPress: (...args: any[]) => any;
  onWishListPress: (...args: any) => any;
  isFavorite: boolean;
}

function EntityCard({
  entity,
  onPress,
  onWishListPress,
  isFavorite,
}: EntityCardProps) {
  const style = useGetStyles();

  return (
    <TouchFeedback key={entity.id} onPress={onPress} style={style.item}>
      <View style={style.imageWrapper}>
        <Image uri={entity.logoUrl} style={style.logo} resizeMode="cover" />
      </View>

      <View style={style.contentWrapper}>
        <Text style={style.title}>{entity.companyName}</Text>
        <Text style={style.shortDescription} numberOfLines={2}>
          {entity.description}
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
      <WishlistButton active={isFavorite} onPress={onWishListPress} />
    </TouchFeedback>
  );
}

export default React.memo(EntityCard);
