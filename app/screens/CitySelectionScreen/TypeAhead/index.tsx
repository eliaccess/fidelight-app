/*
 *
 * CitiesTypeAhead
 *
 */

import React, { useState } from 'react';
import { View, FlatList, TextInput } from 'react-native';

import { useDebouncedEffect } from 'hooks/useDebouncedEffect';

import Loader from 'theme/Loader';
import NoResult from 'theme/NoResult';
import TouchFeedback from 'theme/TouchFeedback';
import Icon from 'theme/Icon';
import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';

import { useCitiesSearch } from 'containers/CitiesSearch';

import messages from '../messages';
import style from './style';

const CitiesTypeAhead: React.FC<{
  onSelect: (data: any) => void;
}> = (props) => {
  const [query, setQuery] = useState<string>('');
  const placeholder = useFormattedMessage(messages.searchPlaceholder);
  const citiesSearch = useCitiesSearch();

  useDebouncedEffect(() => citiesSearch.getData({ query }), 500, [query]);

  const { data, fetching } = citiesSearch;

  return (
    <>
      <View style={style.inputHolder} key="input">
        <Icon name="search" style={style.searchIcon} />
        <TextInput
          style={style.input}
          onChangeText={setQuery}
          value={query}
          placeholder={placeholder}
          keyboardType="default"
          clearButtonMode="while-editing"
          autoFocus
        />
      </View>
      {query && query === citiesSearch.query ? (
        <FlatList
          style={style.listHolder}
          data={data}
          renderItem={({ item }) => (
            <TouchFeedback
              style={style.listItem}
              onPress={() => props.onSelect(item)}
            >
              <FormattedMessage
                {...messages.cityLabel}
                style={style.listItemText}
                values={item}
              />
            </TouchFeedback>
          )}
          ListFooterComponent={
            fetching ? (
              <View style={style.listItem}>
                <Loader />
              </View>
            ) : null
          }
          ListEmptyComponent={!fetching && query ? <NoResult /> : null}
        />
      ) : null}
    </>
  );
};

export default CitiesTypeAhead;
