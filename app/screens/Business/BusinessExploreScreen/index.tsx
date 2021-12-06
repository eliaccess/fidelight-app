/*
 *
 * BusinessExploreScreen
 *
 */

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { useUser } from 'containers/Business/BusinessAuthentication';
import { useEntityOffersRewards } from 'containers/EntityOffersRewards';

import FormattedMessage from 'theme/FormattedMessage';
import TouchFeedback from 'theme/TouchFeedback';
import { useToastContext } from 'theme/Toast';
import Modal from 'theme/Modal';
import Icon from 'theme/Icon';

import CreateRewardForm from './CreateRewardForm';
import CreateOfferForm from './CreateOfferForm';
import BusinessExploreRewards from './Rewards';
import BusinessExploreOffers from './Offers';
import messages from './messages';
import style from './style';

const BusinessExploreScreen: React.FC<{ activeTabIndex: number }> = (props) => {
  const [showCreateOffers, setShowCreateOffers] = useState(false);
  const [showCreateReward, setShowCreateReward] = useState(false);
  const user = useUser();
  const toast = useToastContext();

  const entityOffersRewards = useEntityOffersRewards({
    entityId: user?.data?.id || -1,
  });

  const { activeTabIndex } = props;

  useEffect(() => {
    if (entityOffersRewards?.message) {
      toast?.show({
        message: entityOffersRewards?.message,
        delay: 1000,
        type: 'success',
      });
      entityOffersRewards.reset();
    }
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
            onSubmit={(values: any) => {
              entityOffersRewards.submit({
                data: {
                  company: user?.data?.id || 1,
                  name: values.offerName,
                  description: values.discountDescription,
                  discountType: values.offerType.id,
                  startDate: values.startDate,
                  expirationDate: values.endDate,
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
            onSubmit={(values: any) => {
              entityOffersRewards.submit({
                data: {
                  company: user?.data?.id || 1,
                  name: values.offerName,
                  description: values.rewardDescription,
                  discountType: values.rewardType.id,
                  cost: values.rewardsPoints,
                  value: values.discountValue,
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
};

export default React.memo(BusinessExploreScreen);
