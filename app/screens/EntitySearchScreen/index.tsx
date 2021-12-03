/*
 *
 * EntitySearchScreen
 *
 */

import React, { useState } from 'react';
import { View, FlatList, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { useDebouncedEffect } from 'hooks/useDebouncedEffect';
import { ENTITY_DETAIL } from 'router/routeNames';

import { useEntitySearch } from 'containers/EntitySearch';
import { useRecentViewedEntities } from 'containers/RecentViewedEntities';

import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';
import TouchFeedback from 'theme/TouchFeedback';
import NoResult from 'theme/NoResult';
import Screen from 'theme/Screen';
import Loader from 'theme/Loader';
import Icon from 'theme/Icon';
import Text from 'theme/Text';

import { EntitySearchScreenProps } from './types';
import RecentWidget from './RecentWidget';
import messages from './messages';
import style from './style';

const EntitySearchScreen: React.FC<EntitySearchScreenProps> = (props) => {
  const [query, setQuery] = useState('');

  const entitySearch = useEntitySearch();
  const recentViewedEntities = useRecentViewedEntities();

  useDebouncedEffect(() => entitySearch.getData({ query }), 500, [query]);

  const resetSearch = () => {
    setQuery('');
  };

  const renderItem = ({ item }) => (
    <Animatable.View
      useNativeDriver
      animation="fadeIn"
      easing="ease-in-out"
      duration={200}
      style={style.linkItemContainer}
    >
      <TouchFeedback
        style={style.listItem}
        onPress={() => {
          props.navigation.navigate(ENTITY_DETAIL, {
            entityId: item.id,
          });
          resetSearch();
        }}
      >
        <Text style={style.listItemLabel}>{item.name}</Text>
      </TouchFeedback>
    </Animatable.View>
  );

  const searchPlaceholder = useFormattedMessage(messages.searchPlaceholder);

  return (
    <Screen
      testID="EntitySearchScreen"
      headerTitle={<FormattedMessage {...messages.header} isFragment />}
    >
      <View style={style.container}>
        <View style={style.inputHolder} key="input">
          <Icon name="search" style={style.searchIcon} />
          <TextInput
            style={style.input}
            onChangeText={setQuery}
            value={query}
            placeholder={searchPlaceholder}
            keyboardType="default"
            clearButtonMode="while-editing"
          />
        </View>

        {query ? (
          <FlatList
            style={style.list}
            data={entitySearch.data}
            contentContainerStyle={style.listContent}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="never"
            bounces={false}
            renderItem={renderItem}
            ListEmptyComponent={
              entitySearch.fetching ? (
                <Loader />
              ) : (
                <NoResult
                  message={
                    <FormattedMessage {...messages.noResult} isFragment />
                  }
                />
              )
            }
          />
        ) : null}

        {recentViewedEntities.data?.length !== 0 && (
          <RecentWidget
            data={recentViewedEntities.data}
            navigate={props.navigation.navigate}
          />
        )}
      </View>
    </Screen>
  );
};

export default React.memo(EntitySearchScreen);
