/*
 *
 * DealListingScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import useStateHandler from 'hooks/useStateHandler';
import { DEAL_DETAIL } from 'router/routeNames';

import { useHotDeals } from 'containers/HotDeals';
import { useUserLocation } from 'containers/UserLocation';

import Screen from 'theme/Screen';
import FormattedMessage from 'theme/FormattedMessage';
import TouchFeedback from 'theme/TouchFeedback';
import Image from 'theme/Image';
import Text from 'theme/Text';

import { DealListingScreenProps } from './types';
import DealListingLoader from './Loader';
import style from './style';
import messages from './messages';

const DealListingScreen: React.FC<DealListingScreenProps> = (props) => {
  const userLocation = useUserLocation();

  const hotDeals = useHotDeals({
    city: userLocation.data.cityName,
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
                props.navigation.navigate(DEAL_DETAIL, {
                  dealId: item.id,
                });
              }}
              style={style.item}
            >
              {item?.pictureLink.includes('http') ? (
                <Image uri={item.pictureLink} style={style.image} />
              ) : null}
              <View style={style.contentWrapper}>
                <Text style={style.title}>{item.name}</Text>
                <Text style={style.shortDescription} numberOfLines={1}>
                  {item.description}
                </Text>
              </View>
            </TouchFeedback>
          ))}
        </View>
      )}
    </Screen>
  );
};

export default React.memo(DealListingScreen);
