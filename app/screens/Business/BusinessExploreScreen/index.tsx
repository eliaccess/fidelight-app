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
import Text from 'theme/Text';
import Icon from 'theme/Icon';
import LinearGradient from 'react-native-linear-gradient';

import { useEntityOffersRewards } from 'containers/EntityOffersRewards';

import { buttonGradientProps } from 'theme/utils';
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
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [showCreateOffers, setShowCreateOffers] = useState(false);
  const [showCreateReward, setShowCreateReward] = useState(false);
  const user = useUser();
  const toast = useToastContext();

  const entityOffersRewards = useEntityOffersRewards({
    entityId: user?.data?.id || -1,
  });

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
      <View style={style.container}>
        <LinearGradient {...buttonGradientProps()} style={style.backdrop} />
        <View style={style.iconsWrapper}>
          <TouchFeedback onPress={() => null} style={style.menuIconWrapper}>
            <Icon name="menu" style={style.menuIcon} />
          </TouchFeedback>
          <Text style={style.entityName}>{user?.data?.name}</Text>
          <View />
        </View>
        <View style={style.tabContainer}>
          <TouchFeedback
            onPress={() => setActiveTabIndex(0)}
            style={[style.tab, activeTabIndex === 0 ? style.activeTab : null]}
          >
            <FormattedMessage
              {...messages.offersLabel}
              style={[
                style.tabLabel,
                activeTabIndex === 0 ? style.activeTab : null,
              ]}
            />
          </TouchFeedback>
          <TouchFeedback
            onPress={() => setActiveTabIndex(1)}
            style={[style.tab, activeTabIndex === 1 ? style.activeTab : null]}
          >
            <FormattedMessage
              {...messages.rewardsLabel}
              style={[
                style.tabLabel,
                activeTabIndex === 1 ? style.activeTab : null,
              ]}
            />
          </TouchFeedback>
        </View>
      </View>
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
        <>
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
        </>
      </Modal>

      <Modal
        visible={showCreateReward}
        onRequestClose={() => setShowCreateReward(false)}
      >
        <>
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
        </>
      </Modal>
    </>
  );
}

export default React.memo(BusinessExploreScreen);
