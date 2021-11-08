/*
 *
 * DealDetailScreen
 *
 */

import { useHotDealDetail } from 'containers/HotDealDetail';
import useStateHandler from 'hooks/useStateHandler';
import React from 'react';
import { View } from 'react-native';

import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Modal from 'theme/Modal';
import Text from 'theme/Text';
import DealDetailLoader from './Loader';

import messages from './messages';
import style from './style';

import { DealDetailScreenProps } from './types';

function DealDetailScreen(props: DealDetailScreenProps) {
  const dealDetail = useHotDealDetail({
    dealId: props.route.params.dealId,
  });

  const showContent = useStateHandler({
    state: dealDetail,
    stateIdentifier: 'data.id',
  });

  return (
    <View style={style.container}>
      <Modal
        onRequestClose={() => {
          props.navigation.goBack();
        }}
        visible={true}
      >
        {!showContent ? (
          <DealDetailLoader />
        ) : (
          <>
            <View style={style.modalHeader}>
              <Text style={style.dealTitle}>{dealDetail?.data?.name}</Text>
              <Text style={style.dealProduct}>{dealDetail?.data?.product}</Text>
              <View style={style.ellipse} />
              <View style={style.innerEllipse} />
              <Image title="dealImage" style={style.dealImage} />
            </View>
            <View style={style.modalContent}>
              <View style={style.dealValidDateWrapper}>
                <Text style={style.dealValidDate}>
                  Valid Til {dealDetail?.data?.expirationDate?.split('T')[0]}
                </Text>
              </View>
              <View style={style.dealDetailWrapper}>
                <FormattedMessage
                  {...messages.offerDetailLabel}
                  style={style.offerDetailLabel}
                />
                <Text style={style.dealDetail}>
                  {dealDetail?.data?.description}
                </Text>
              </View>
            </View>
          </>
        )}
      </Modal>
    </View>
  );
}

export default React.memo(DealDetailScreen);
