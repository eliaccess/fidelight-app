/*
 *
 * BusinessExploreOffers
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

import EditOfferForm from '../EditOfferForm';

const OPTION = {
  title: 'Select Image',
  options: {
    saveToPhotos: false,
    mediaType: 'image',
  },
};

type BusinessExploreOffersProps = {
  entityId: number;
};

function BusinessExploreOffers(props: BusinessExploreOffersProps) {
  const [initialData, setInitialData] = useState<any>();
  const [showEditOfferForm, setShowEditOfferForm] = useState(false);
  const toast = useToastContext();
  const entityOffersRewards = useEntityOffersRewards({
    entityId: props.entityId,
  });

  const showContent = useStateHandler({
    state: entityOffersRewards,
    stateIdentifier: 'data.offers.length',
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

  const offers = entityOffersRewards?.data?.offers;

  const onAddLogoPress = (offerId) => {
    // @ts-ignore
    launchImageLibrary(OPTION, (resp: any) => {
      if (resp?.didCancel) {
        return;
      }

      entityOffersRewards.addLogo({
        data: resp?.assets[0],
        entityId: props.entityId,
        // @ts-ignore
        discountId: offerId,
      });
    });
  };

  return (
    <>
      <View style={style.headingContainer}>
        <FormattedMessage
          {...messages.activateOfferLabel}
          style={style.activeHeading}
        />
        <FormattedMessage
          {...messages.deactivateOfferLabel}
          style={style.deactiveHeading}
        />
      </View>
      <View style={style.list}>
        {!showContent ? (
          <BusinessOffersRewardsLoaderProps numberOfItems={4} />
        ) : (
          <>
            {offers && offers.length > 0 ? (
              offers?.map((item) => (
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
                              'Delete Offer Image',
                              'Are you sure to delete offer image?',
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
                        setShowEditOfferForm(true);
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
                          'Delete Offer',
                          'Are you sure to delete this offer?',
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
              <NoResult message={entityOffersRewards?.message} />
            )}
          </>
        )}

        <Modal
          visible={showEditOfferForm}
          onRequestClose={() => setShowEditOfferForm(false)}
        >
          <View style={style.OfferContainer}>
            <FormattedMessage
              {...messages.editOfferHeading}
              style={style.modalHeading}
            />
            <EditOfferForm
              onSubmit={(values) => {
                entityOffersRewards.update({
                  data: {
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
                  entityId: props.entityId,
                  // @ts-ignore
                  discountId: values.discountId,
                });
                setShowEditOfferForm(false);
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

export default React.memo(BusinessExploreOffers);
