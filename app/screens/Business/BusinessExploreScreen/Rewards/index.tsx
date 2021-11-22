/*
 *
 * BusinessExploreRewards
 *
 */

import React, { useState } from 'react';
import { View } from 'react-native';

import { useEntityOffersRewards } from 'containers/EntityOffersRewards';
import useStateHandler from 'hooks/useStateHandler';

import FormattedMessage from 'theme/FormattedMessage';
import Text from 'theme/Text';
import Icon from 'theme/Icon';

import Image from 'theme/Image';
import NoResult from 'theme/NoResult';
import TouchFeedback from 'theme/TouchFeedback';
import Modal from 'theme/Modal';

import style from './style';
import messages from '../messages';
import BusinessOffersRewardsLoaderProps from '../Loader';

import EditRewardForm from '../EditRewardForm';

type BusinessExploreRewardsProps = {
  entityId: number;
};

function BusinessExploreRewards(props: BusinessExploreRewardsProps) {
  const [initialData, setInitialData] = useState<any>();
  const [showEditRewardForm, setShowEditRewardForm] = useState(false);
  const entityOffersRewards = useEntityOffersRewards({
    entityId: props.entityId,
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
          <>
            {rewards && rewards?.length > 0 ? (
              rewards?.map((item) => (
                <View key={item.id} style={style.itemWrapper}>
                  <View style={style.logoWrapper}>
                    <Image
                      uri={
                        item.pictureLink ||
                        'https://images.unsplash.com/photo-1544502779-9d192f5da63e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2045&q=80'
                      }
                      style={style.logo}
                    />
                  </View>
                  <View style={style.contentWrapper}>
                    <Text style={style.title}>{item.name}</Text>
                    <Text style={style.shortDescription}>
                      {item.description}
                    </Text>
                  </View>
                  <TouchFeedback
                    onPress={() => {
                      setInitialData(item);
                      setShowEditRewardForm(true);
                    }}
                    style={style.editIconHolder}
                  >
                    <Icon name="edit" font="fidelight" style={style.editIcon} />
                  </TouchFeedback>
                </View>
              ))
            ) : (
              <NoResult
                message={
                  <FormattedMessage {...messages.noRewardsFound} isFragment />
                }
              />
            )}
          </>
        )}
        <Modal
          visible={showEditRewardForm}
          onRequestClose={() => setShowEditRewardForm(false)}
        >
          <View style={style.rewardContainer}>
            <FormattedMessage
              {...messages.editRewardHeading}
              style={style.modalHeading}
            />
            <EditRewardForm
              onSubmit={(values) => {
                entityOffersRewards.update({
                  data: {
                    name: values.offerName,
                    description: values.rewardDescription,
                    discountType: values.rewardType.id,
                    cost: values.rewardsPoints,
                    value: values.discountValue,
                    // @ts-ignore
                    perDay: values.perDay,
                  },
                  entityId: props.entityId,
                  // @ts-ignore
                  discountId: values.discountId,
                });
                setShowEditRewardForm(false);
              }}
              data={initialData}
            />
          </View>
        </Modal>
      </View>
    </>
  );
}

export default React.memo(BusinessExploreRewards);
