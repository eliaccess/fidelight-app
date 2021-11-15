/*
 *
 * BusinessExploreScreen
 *
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { useUser } from 'containers/Business/BusinessAuthentication';

import FormattedMessage from 'theme/FormattedMessage';
import Text from 'theme/Text';
import Icon from 'theme/Icon';
import LinearGradient from 'react-native-linear-gradient';
import { buttonGradientProps } from 'theme/utils';
import TouchFeedback from 'theme/TouchFeedback';
import Modal from 'theme/Modal';

import { BusinessExploreScreenProps } from './types';
import style from './style';
import messages from './messages';
import BusinessExploreOffers from './Offers';
import BusinessExploreRewards from './Rewards';
import CreateOfferForm from './CreateOfferForm';
import CreateRewardForm from './CreateRewardForm';

function BusinessExploreScreen(_props: BusinessExploreScreenProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [showCreateOffers, setShowCreateOffers] = useState(false);
  const [showCreateReward, setShowCreateReward] = useState(false);
  const user = useUser();
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainerStyle}
      >
        {activeTabIndex === 0 ? (
          <BusinessExploreOffers />
        ) : (
          <BusinessExploreRewards />
        )}
      </ScrollView>
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
        <View style={style.modalContent}>
          <FormattedMessage
            {...messages.createOfferHeading}
            style={style.modalHeading}
          />
          <CreateOfferForm onSubmit={(values) => setShowCreateOffers(false)} />
        </View>
      </Modal>
      <Modal
        visible={showCreateReward}
        onRequestClose={() => setShowCreateReward(false)}
      >
        <View style={style.rewardModalContent}>
          <FormattedMessage
            {...messages.createRewardHeading}
            style={style.modalHeading}
          />
          <CreateRewardForm onSubmit={() => setShowCreateReward(false)} />
        </View>
      </Modal>
    </>
  );
}

export default React.memo(BusinessExploreScreen);
