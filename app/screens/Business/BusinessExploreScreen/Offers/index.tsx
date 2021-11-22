/*
 *
 * BusinessExploreOffers
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

import EditOfferForm from '../EditOfferForm';

type BusinessExploreOffersProps = {
  entityId: number;
};

function BusinessExploreOffers(props: BusinessExploreOffersProps) {
  const [initialData, setInitialData] = useState<any>();
  const [showEditOfferForm, setShowEditOfferForm] = useState(false);
  const entityOffersRewards = useEntityOffersRewards({
    entityId: props.entityId,
  });

  const showContent = useStateHandler({
    state: entityOffersRewards,
    stateIdentifier: 'data.offers.length',
  });

  const offers = entityOffersRewards?.data?.offers;

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
                    <Image
                      title={
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
                      setShowEditOfferForm(true);
                    }}
                    style={style.editIconHolder}
                  >
                    <Icon name="edit" font="fidelight" style={style.editIcon} />
                  </TouchFeedback>
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
      </View>
    </>
  );
}

export default React.memo(BusinessExploreOffers);
