/*
 *
 * RewardsSection
 *
 */

import React from 'react';
import { View } from 'react-native';

import { useEntityOffersRewards } from 'containers/EntityOffersRewards';
import { useUser } from 'containers/Authentication';
import useStateHandler from 'hooks/useStateHandler';

import FormattedMessage from 'theme/FormattedMessage';

import Image from 'theme/Image';
import Section from 'theme/Section';
import Text from 'theme/Text';
import NoResult from 'theme/NoResult';
import TouchFeedback from 'theme/TouchFeedback';
import { useToastContext } from 'theme/Toast';
import { QR_CODE } from 'router/routeNames';

import style from './style';
import messages from '../messages';
import RewardsSectionLoader from './Loader';

type RewardsSectionProps = {
  entityId: number;
  navigation: any;
};
function RewardsSection(props: RewardsSectionProps) {
  const user = useUser();
  const toast = useToastContext();
  const entityOffersRewards = useEntityOffersRewards({
    entityId: props.entityId,
  });

  const showContent = useStateHandler({
    state: entityOffersRewards,
    stateIdentifier: 'data.rewards.length',
  });

  if (!showContent) {
    return (
      <RewardsSectionLoader
        heading={<FormattedMessage {...messages.weeksDealHeading} isFragment />}
      />
    );
  }
  const rewards = entityOffersRewards?.data?.rewards;
  return (
    <View style={style.rewardSectionContainer}>
      <Section
        heading={<FormattedMessage {...messages.rewardsHeading} isFragment />}
      >
        {rewards ? (
          rewards?.map((item) => {
            let activeProgress = `${(
              (item.value / item.cost) *
              100
            ).toString()}%`;
            if (activeProgress === '100%') {
              activeProgress = '80%';
            }
            return (
              <TouchFeedback
                onPress={() => {
                  if (item.value === item.cost) {
                    props.navigation.navigate(QR_CODE, {
                      rewardId: item.id,
                      qrValue: `${user.data?.qrCode}.${user?.data?.id}.${item.id}`,
                    });
                    return;
                  }
                  toast?.show({
                    // @ts-ignore
                    message: (
                      <FormattedMessage
                        {...messages.makePointsLabel}
                        values={{ points: item.cost - item.value }}
                        isFragment
                      />
                    ),
                    delay: 2000,
                    type: 'error',
                  });
                }}
                style={style.itemWrapper}
              >
                <View style={style.logoWrapper}>
                  <Image title="badge" style={style.logo} />
                </View>
                <View style={style.contentWrapper}>
                  <Text style={style.title}>{item.name}</Text>
                  <Text style={style.shortDescription}>{item.description}</Text>
                  <View style={style.progressBarWrapper}>
                    <View
                      style={[style.activeProgress, { width: activeProgress }]}
                    />
                    <View
                      style={[
                        style.progressValueWrapper,
                        { left: activeProgress },
                      ]}
                    >
                      <Text style={style.progressValue}>
                        {item.value}/{item.cost}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchFeedback>
            );
          })
        ) : (
          <NoResult message={entityOffersRewards?.message} />
        )}
      </Section>
    </View>
  );
}

export default React.memo(RewardsSection);
