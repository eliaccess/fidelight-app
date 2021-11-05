/*
 *
 * FavoriteEntitiesScreen
 *
 */

import React from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

import { useFavoriteEntities } from 'containers/FavoriteEntities';
import useStateHandler from 'hooks/useStateHandler';

import EntityCard from 'components/EntityCard';
import NoResult from 'theme/NoResult';

import { ENTITY_DETAIL } from 'router/routeNames';

import style from './style';

import { FavoriteEntitiesScreenProps } from './types';
import FavoriteEntitiesLoader from './Loader';

function FavoriteEntitiesScreen(props: FavoriteEntitiesScreenProps) {
  const favoriteEntities = useFavoriteEntities();

  const showContent = useStateHandler({
    state: favoriteEntities,
  });

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainerStyle}
      >
        {!showContent ? (
          <FavoriteEntitiesLoader numberOfItems={4} />
        ) : (
          <Animatable.View animation="fadeIn" duration={1500}>
            {favoriteEntities?.data ? (
              favoriteEntities.data.map((item) => (
                <EntityCard
                  entity={item}
                  onPress={() => {
                    props.navigation.navigate(ENTITY_DETAIL, {
                      entityId: item.id,
                    });
                  }}
                  onWishListPress={() => {}}
                  isFavorite={true}
                  showWishList={true}
                />
              ))
            ) : (
              <NoResult message={favoriteEntities?.message} />
            )}
          </Animatable.View>
        )}
      </ScrollView>
    </>
  );
}

export default React.memo(FavoriteEntitiesScreen);
