/*
 *
 * Search
 *
 */

import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

import { useEntitySearch } from 'containers/EntitySearch';
import { useRecentViewedEntities } from 'containers/RecentViewedEntities';

import IconButton from 'theme/Button/IconButton';
import Input from 'theme/Input';
import TouchFeedback from 'theme/TouchFeedback';
import Loader from 'theme/Loader';
import Text from 'theme/Text';

import Image from 'theme/Image';
import Screen from 'theme/Screen';
import NoResult from 'theme/NoResult';
import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';

import { useDebouncedEffect } from 'hooks/useDebouncedEffect';
import { ENTITY_DETAIL } from 'router/routeNames';
import messages from './messages';
import style from './style';

import { EntitySearchScreenProps } from './types';
import RecentWidget from './RecentWidget';

function EntitySearchScreen(props: EntitySearchScreenProps) {
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
        <Image uri={item.logo} title="thumb" style={style.listItemImage} />
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
        <View style={style.searchHolder}>
          <View style={[style.inputHolder]}>
            <Input
              key="input"
              onChangeText={(queryText) => {
                try {
                  setQuery(queryText);
                } catch (e) {
                  setQuery('');
                }
              }}
              value={query}
              clearButtonMode="never"
              placeholder={!query ? searchPlaceholder : ''}
              autoCorrect={false}
            />

            {query ? (
              <View style={style.cancelButton}>
                <IconButton
                  icon={{
                    name: 'x',
                  }}
                  onPress={() => resetSearch()}
                />
              </View>
            ) : null}
          </View>
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
            headingKey="recentViewedEntities"
            // @ts-ignore
            data={recentViewedEntities.data}
            navigate={props.navigation.navigate}
          />
        )}
      </View>
    </Screen>
  );
}

EntitySearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired,
};

export default EntitySearchScreen;
