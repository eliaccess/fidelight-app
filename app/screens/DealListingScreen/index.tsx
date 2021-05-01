/*
 *
 * DealListingScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import Screen from 'theme/Screen';
import FormattedMessage from 'theme/FormattedMessage';
import TouchFeedback from 'theme/TouchFeedback';
import Image from 'theme/Image';
import Text from 'theme/Text';

import style from './style';
import messages from './messages';
import { DealListingScreenProps } from './types';
import Deals from './data';

function DealListingScreen(_props: DealListingScreenProps) {
  return (
    <Screen
      testID="DealListingScreen"
      headerTitle={<FormattedMessage {...messages.title} isFragment />}
    >
      <View style={style.container}>
        {Deals.map((item) => (
          <TouchFeedback key={item.id} onPress={() => null} style={style.item}>
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
    </Screen>
  );
}

export default React.memo(DealListingScreen);
