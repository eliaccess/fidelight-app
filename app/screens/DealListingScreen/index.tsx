/*
 *
 * DealListingScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import { useHotDeals } from 'containers/HotDeals';
import useStateHandler from 'hooks/useStateHandler';

import Screen from 'theme/Screen';
import FormattedMessage from 'theme/FormattedMessage';
import TouchFeedback from 'theme/TouchFeedback';
import Image from 'theme/Image';
import Text from 'theme/Text';
import { DEAL_DETAIL } from 'router/routeNames';

import style from './style';
import messages from './messages';
import { DealListingScreenProps } from './types';

import DealListingLoader from './Loader';

function DealListingScreen(props: DealListingScreenProps) {
  const hotDeals = useHotDeals({
    city: 'Paris',
  });

  const showContent = useStateHandler({
    state: hotDeals,
  });

  return (
    <Screen
      testID="DealListingScreen"
      headerTitle={<FormattedMessage {...messages.title} isFragment />}
    >
      {!showContent ? (
        <DealListingLoader numberOfItems={4} />
      ) : (
        <View style={style.container}>
          {hotDeals?.data?.map((item) => (
            <TouchFeedback
              key={item.id}
              onPress={() => {
                props.navigation.navigate(DEAL_DETAIL);
              }}
              style={style.item}
            >
              <Image uri={item.image} style={style.image} />
              <View style={style.contentWrapper}>
                <Text style={style.title}>{item.title}</Text>
                <Text style={style.shortDescription} numberOfLines={1}>
                  {item.shortDescription}
                </Text>
              </View>
            </TouchFeedback>
          ))}
        </View>
      )}
    </Screen>
  );
}

export default React.memo(DealListingScreen);
