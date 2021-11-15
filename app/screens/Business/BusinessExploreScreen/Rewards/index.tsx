/*
 *
 * BusinessExploreRewards
 *
 */

import React from 'react';
import { View } from 'react-native';

import { useEntityOffersRewards } from 'containers/EntityOffersRewards';
import useStateHandler from 'hooks/useStateHandler';

import FormattedMessage from 'theme/FormattedMessage';
import Text from 'theme/Text';
import Icon from 'theme/Icon';

import Image from 'theme/Image';

import style from './style';
import messages from '../messages';
import BusinessOffersRewardsLoaderProps from '../Loader';

function BusinessExploreRewards(props) {
  const entityOffersRewards = useEntityOffersRewards({
    entityId: props?.entityId || 1,
  });

  const showContent = useStateHandler({
    state: entityOffersRewards,
    stateIdentifier: 'data.rewards.length',
  });

  const rewards = entityOffersRewards?.data?.rewards;
  return (
    <>
      <View style={style.headingContainer}>
        <FormattedMessage
          {...messages.activateRewardLabel}
          style={style.activeHeading}
        />
        <FormattedMessage
          {...messages.deactivateRewardLabel}
          style={style.deactiveHeading}
        />
      </View>
      <View style={style.list}>
        {!showContent ? (
          <BusinessOffersRewardsLoaderProps numberOfItems={4} />
        ) : (
          rewards?.map((item) => (
            <View key={item.id} style={style.itemWrapper}>
              <View style={style.logoWrapper}>
                <Image title={item.pictureLink} style={style.logo} />
              </View>
              <View style={style.contentWrapper}>
                <Text style={style.title}>{item.name}</Text>
                <Text style={style.shortDescription}>{item.description}</Text>
              </View>
              <View style={style.editIconHolder}>
                <Icon name="edit" font="fidelight" style={style.editIcon} />
              </View>
            </View>
          ))
        )}
      </View>
    </>
  );
}

export default React.memo(BusinessExploreRewards);
