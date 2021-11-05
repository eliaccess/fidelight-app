/*
 *
 * CitiesTypeAhead
 *
 */

import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { useDebouncedEffect } from 'hooks/useDebouncedEffect';

import Input from 'theme/Input';
import Loader from 'theme/Loader';
import NoResult from 'theme/NoResult';
import TouchFeedback from 'theme/TouchFeedback';

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
    <View style={style.container}>
      <View style={style.inputHolder} key="input">
        <Input
          onChangeText={setQuery}
          placeholder={placeholder}
          value={query}
          autoCorrect={false}
          autoCapitalize="words"
          keyboardType="default"
          clearButtonMode="always"
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
    </View>
  );
};

export default CitiesTypeAhead;
