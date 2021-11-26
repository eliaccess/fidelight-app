/*
 *
 * BusinessExploreRewards
 *
 */

import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import { useEntityOffersRewards } from 'containers/EntityOffersRewards';
import useStateHandler from 'hooks/useStateHandler';

import FormattedMessage from 'theme/FormattedMessage';
import Text from 'theme/Text';
import Icon from 'theme/Icon';

import Image from 'theme/Image';
import NoResult from 'theme/NoResult';
import TouchFeedback from 'theme/TouchFeedback';
import Modal from 'theme/Modal';
import { useToastContext } from 'theme/Toast';
import FullScreenLoader from 'theme/FullScreenLoader';
import style from './style';
import messages from '../messages';
import BusinessOffersRewardsLoaderProps from '../Loader';

import EditRewardForm from '../EditRewardForm';

const OPTION = {
  title: 'Select Image',
  options: {
    saveToPhotos: false,
    mediaType: 'image',
  },
};

type BusinessExploreRewardsProps = {
  entityId: number;
};

function BusinessExploreRewards(props: BusinessExploreRewardsProps) {
  const [initialData, setInitialData] = useState<any>();
  const [showEditRewardForm, setShowEditRewardForm] = useState(false);
  const entityOffersRewards = useEntityOffersRewards({
    entityId: props.entityId,
  });
  const toast = useToastContext();

  const showContent = useStateHandler({
    state: entityOffersRewards,
    stateIdentifier: 'data.rewards.length',
  });
  useEffect(() => {
    if (entityOffersRewards?.message) {
      toast?.show({
        message: entityOffersRewards?.message,
        delay: 1000,
        type: 'success',
      });
      entityOffersRewards.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityOffersRewards?.message]);

  const rewards = entityOffersRewards?.data?.rewards;

  const onAddLogoPress = (rewardId) => {
    // @ts-ignore
    launchImageLibrary(OPTION, (resp: any) => {
      if (resp?.didCancel) {
        return;
      }

      entityOffersRewards.addLogo({
        data: resp?.assets[0],
        entityId: props.entityId,
        // @ts-ignore
        discountId: rewardId,
      });
    });
  };

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
                    {item.pictureLink ? (
                      <>
                        <Image
                          uri={item.pictureLink || ''}
                          style={style.logo}
                          resizeMode="cover"
                        />
                        <TouchFeedback
                          onPress={() => {
                            Alert.alert(
                              'Delete Reward Image',
                              'Are you sure to delete reward image?',
                              [
                                {
                                  text: 'No',
                                  onPress: () => null,
                                  style: 'cancel',
                                },
                                {
                                  text: 'Yes',
                                  onPress: () => {
                                    entityOffersRewards.removeLogo({
                                      entityId: props.entityId,
                                      // @ts-ignore
                                      discountId: item.id,
                                    });
                                  },
                                },
                              ],
                              { cancelable: true },
                            );
                          }}
                          style={style.deleteLogoWrapper}
                        >
                          <Icon
                            name="trash"
                            font="fidelight"
                            style={style.deleteIcon}
                          />
                        </TouchFeedback>
                      </>
                    ) : null}
                  </View>
                  <View style={style.contentWrapper}>
                    <Text style={style.title}>{item.name}</Text>
                    <Text style={style.shortDescription}>
                      {item.description}
                    </Text>
                  </View>
                  <View style={style.actionsWrapper}>
                    <TouchFeedback
                      onPress={() => {
                        setInitialData(item);
                        setShowEditRewardForm(true);
                      }}
                      style={style.actionIconHolder}
                    >
                      <Icon
                        name="edit"
                        font="fidelight"
                        style={style.editIcon}
                      />
                    </TouchFeedback>
                    <TouchFeedback
                      onPress={() => {
                        Alert.alert(
                          'Delete Reward',
                          'Are you sure to delete this reward?',
                          [
                            {
                              text: 'No',
                              onPress: () => null,
                              style: 'cancel',
                            },
                            {
                              text: 'Yes',
                              onPress: () => {
                                entityOffersRewards.remove({
                                  entityId: props.entityId,
                                  // @ts-ignore
                                  discountId: item.id,
                                });
                              },
                            },
                          ],
                          { cancelable: true },
                        );
                      }}
                      style={style.actionIconHolder}
                    >
                      <Icon
                        name="trash"
                        font="fidelight"
                        style={style.deleteIcon}
                      />
                    </TouchFeedback>
                    <TouchFeedback
                      onPress={() => {
                        onAddLogoPress(item.id);
                      }}
                      style={style.actionIconHolder}
                    >
                      <Icon
                        name="picture"
                        font="fidelight"
                        style={style.photoIcon}
                      />
                    </TouchFeedback>
                  </View>
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
        {entityOffersRewards.submitting ||
        entityOffersRewards.updating ||
        entityOffersRewards.removing ? (
          <FullScreenLoader />
        ) : null}
      </View>
    </>
  );
}

export default React.memo(BusinessExploreRewards);
