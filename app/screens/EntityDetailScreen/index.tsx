/*
 *
 * EntityDetailScreen
 *
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';

import useStateHandler from 'hooks/useStateHandler';
import { useEntityDetail } from 'containers/EntityDetail';
import { useRecentViewedEntities } from 'containers/RecentViewedEntities';

import WishlistButton from 'components/WishlistButton';
import Screen from 'theme/Screen';

import { EntityDetailScreenProps } from './types';
import DealsSection from './DealsSection';
import EntityInfo from './EntityInfo';
import EntityTimings from './EntityTimings';
import EntityHeader from './EntityHeader';
import EntityDetailLoader from './Loader';
import RewardsSection from './RewardsSection';
import style from './style';

const EntityDetailScreen: React.FC<EntityDetailScreenProps> = (props) => {
  const entityDetail = useEntityDetail({
    entityId: props.route.params.entityId,
  });

  const recentViewedEntities = useRecentViewedEntities();

  const showContent = useStateHandler({
    state: entityDetail,
    stateIdentifier: 'data.name',
  });

  useEffect(() => {
    if (entityDetail?.data?.id) {
      if (recentViewedEntities) {
        recentViewedEntities.submit({
          data: entityDetail.data,
        });
      }
    }
  }, [entityDetail?.data?.id]);

  return (
    <Screen
      testID="EntityDetailScreen"
      headerVisibilityThreshold={80}
      headerRight={
        showContent || entityDetail?.data ? (
          <View style={style.favoriteIconWrapper}>
            <WishlistButton
              active={entityDetail?.data?.isFavorite}
              onPress={() => {
                entityDetail.toggleFavorite({
                  isFavorite: entityDetail?.data?.isFavorite || false,
                });
              }}
            />
          </View>
        ) : null
      }
    >
      <View style={style.container}>
        {!showContent || !entityDetail.data ? (
          <EntityDetailLoader />
        ) : (
          <>
            <EntityHeader data={entityDetail.data} />
            <EntityInfo data={entityDetail.data} />
            {entityDetail.data?.schedule ? (
              <EntityTimings data={entityDetail.data} />
            ) : null}
          </>
        )}

        <View style={style.sectionWrapper}>
          <DealsSection
            entityId={props.route.params.entityId}
            navigation={props.navigation}
          />
        </View>

        <RewardsSection
          navigation={props.navigation}
          entityId={props.route.params.entityId}
        />
      </View>
    </Screen>
  );
};

export default React.memo(EntityDetailScreen);
