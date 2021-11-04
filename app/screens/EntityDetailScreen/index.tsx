/*
 *
 * EntityDetailScreen
 *
 */

import { useEntityDetail } from 'containers/EntityDetail';
import useStateHandler from 'hooks/useStateHandler';
import React from 'react';
import { View } from 'react-native';

import Screen from 'theme/Screen';

import DealsSection from './DealsSection';
import EntityInfo from './EntityInfo';
import EntityTimings from './EntityTimings';
import EntityHeader from './Header';
import EntityDetailLoader from './Loader';
import RewardsSection from './RewardsSection';
import style from './style';

import { EntityDetailScreenProps } from './types';

function EntityDetailScreen(props: EntityDetailScreenProps) {
  const entityDetail = useEntityDetail({
    entityId: props.route.params.entityId,
  });

  const showContent = useStateHandler({
    state: entityDetail,
    stateIdentifier: 'data.name',
  });

  return (
    <Screen testID="EntityDetailScreen" headerVisibilityThreshold={80}>
      <View style={style.container}>
        {!showContent || !entityDetail.data ? (
          <EntityDetailLoader />
        ) : (
          <>
            <EntityHeader data={entityDetail.data} />
            <EntityInfo
              data={entityDetail.data}
              onWishListPress={() => {
                entityDetail.toggleFavorite({
                  isFavorite: entityDetail?.data?.isFavorite || false,
                });
              }}
            />
            <EntityTimings data={entityDetail.data} />
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
}

export default React.memo(EntityDetailScreen);
