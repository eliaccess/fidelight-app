/*
 *
 * BusinessDealListingScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import useStateHandler from 'hooks/useStateHandler';
import { DEAL_DETAIL } from 'router/routeNames';

import { useEntityOffersRewards } from 'containers/EntityOffersRewards';
import { useUser } from 'containers/Business/BusinessAuthentication';

import FormattedMessage from 'theme/FormattedMessage';
import TouchFeedback from 'theme/TouchFeedback';
import Screen from 'theme/Screen';
import Image from 'theme/Image';
import Text from 'theme/Text';

import { BusinessDealListingScreenProps } from './types';
import DealListingLoader from './Loader';
import messages from './messages';
import style from './style';

function BusinessDealListingScreen(props: BusinessDealListingScreenProps) {
  const user = useUser();

  const entityOffersRewards = useEntityOffersRewards({
    entityId: user.data?.id || -1,
  });

  const showContent = useStateHandler({
    state: entityOffersRewards,
    stateIdentifier: 'data.offers.length',
  });

  const deals = entityOffersRewards?.data?.offers;
  return (
    <Screen
      testID="BusinessDealListingScreen"
      headerTitle={<FormattedMessage {...messages.title} isFragment />}
    >
      {!showContent ? (
        <DealListingLoader numberOfItems={4} />
      ) : (
        <View style={style.container}>
          {deals?.map((item) => (
            <TouchFeedback
              key={item.id}
              onPress={() => {
                props.navigation.navigate(DEAL_DETAIL, {
                  dealId: item.id,
                });
              }}
              style={style.item}
            >
              {item?.pictureLink?.includes('http') ? (
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
}

export default React.memo(BusinessDealListingScreen);
