/*
 *
 * BusinessExploreScreen
 *
 */

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { useUser } from 'containers/Business/BusinessAuthentication';

import FormattedMessage from 'theme/FormattedMessage';
import Icon from 'theme/Icon';

import { useEntityOffersRewards } from 'containers/EntityOffersRewards';

import TouchFeedback from 'theme/TouchFeedback';
import Modal from 'theme/Modal';
import { useToastContext } from 'theme/Toast';

import { BusinessExploreScreenProps } from './types';
import style from './style';
import messages from './messages';
import BusinessExploreOffers from './Offers';
import BusinessExploreRewards from './Rewards';
import CreateOfferForm from './CreateOfferForm';
import CreateRewardForm from './CreateRewardForm';

function BusinessExploreScreen(props: BusinessExploreScreenProps) {
  const [showCreateOffers, setShowCreateOffers] = useState(false);
  const [showCreateReward, setShowCreateReward] = useState(false);
  const user = useUser();
  const toast = useToastContext();

  const entityOffersRewards = useEntityOffersRewards({
    entityId: user?.data?.id || -1,
  });

  // @ts-ignore
  const { activeTabIndex } = props;

  useEffect(() => {
    if (entityOffersRewards?.message) {
      toast?.show({
        message: entityOffersRewards?.message,
        delay: 500,
        type: 'success',
      });
      entityOffersRewards.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityOffersRewards?.data]);

  return (
    <>
      {user?.data?.id ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.contentContainerStyle}
        >
          {activeTabIndex === 0 ? (
            <BusinessExploreOffers entityId={user.data.id} />
          ) : (
            <BusinessExploreRewards entityId={user.data.id} />
          )}
        </ScrollView>
      ) : null}
      <TouchFeedback
        onPress={() => {
          if (activeTabIndex === 0) {
            setShowCreateOffers(true);
          } else {
            setShowCreateReward(true);
          }
        }}
        style={style.addButtonWrapper}
      >
        <Icon name="plus" style={style.addIcon} />
      </TouchFeedback>

      <Modal
        visible={showCreateOffers}
        onRequestClose={() => setShowCreateOffers(false)}
      >
        <View style={style.OfferContainer}>
          <FormattedMessage
            {...messages.createOfferHeading}
            style={style.modalHeading}
          />
          <CreateOfferForm
            onSubmit={(values) => {
              entityOffersRewards.submit({
                data: {
                  company: user?.data?.id || 1,
                  name: values.offerName,
                  description: values.discountDescription,
                  discountType: values.offerType.id,
                  startDate: values.startDate,
                  expirationDate: values.endDate,
                  // @ts-ignore
                  perDay: values.perDay,
                  cost: 0,
                  value: values.discountValue,
                },
              });
              setShowCreateOffers(false);
            }}
          />
        </View>
      </Modal>

      <Modal
        visible={showCreateReward}
        onRequestClose={() => setShowCreateReward(false)}
      >
        <View style={style.rewardContainer}>
          <FormattedMessage
            {...messages.createRewardHeading}
            style={style.modalHeading}
          />
          <CreateRewardForm
            onSubmit={(values) => {
              entityOffersRewards.submit({
                data: {
                  company: user?.data?.id || 1,
                  name: values.offerName,
                  description: values.rewardDescription,
                  discountType: values.rewardType.id,
                  cost: values.rewardsPoints,
                  value: values.discountValue,
                  // @ts-ignore
                  perDay: values.perDay,
                },
              });
              setShowCreateReward(false);
            }}
          />
        </View>
      </Modal>
    </>
  );
}

export default React.memo(BusinessExploreScreen);
