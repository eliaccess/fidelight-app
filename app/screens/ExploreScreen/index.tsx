/*
 *
 * Search
 *
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import HomeHeader from 'components/HomeHeader';
import Modal from 'theme/Modal';
import FormattedMessage from 'theme/FormattedMessage';
import Text from 'theme/Text';
import Icon from 'theme/Icon';

import CategoriesWidget from './Categories';
import HottestDealsWidget from './HottestDeals';
import RestaurantsList from './RestaurantsList';

import { ExploreScreenProps } from './types';
import style from './style';
import messages from './messages';

function ExploreScreen(_props: ExploreScreenProps) {
  const [showTerms, setShowTerms] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  return (
    <>
      <HomeHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainerStyle}
      >
        <View style={style.categoriesSectionWrapper}>
          <CategoriesWidget onPress={() => setShowTerms(true)} />
        </View>
        <HottestDealsWidget />
        <RestaurantsList onPress={() => setShowContactInfo(true)} />
      </ScrollView>
      <Modal visible={showTerms} onRequestClose={() => setShowTerms(false)}>
        <View style={style.modalContent}>
          <FormattedMessage
            {...messages.termsHeading}
            style={style.modalHeading}
          />
          <Text style={style.terms}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </Text>
          <Text style={style.terms}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </Text>
        </View>
      </Modal>
      <Modal
        visible={showContactInfo}
        onRequestClose={() => setShowContactInfo(false)}
      >
        <View style={style.modalContent}>
          <FormattedMessage
            {...messages.contactUsHeading}
            style={style.modalHeading}
          />
          <View style={style.contactInfoContainer}>
            <View style={style.contactInfoItem}>
              <Icon name="map-pin" style={style.contactInfoIcon} />
              <Text style={style.contactInfoItemLabel}>
                Axalta Coating Systems, 1 Allée de Chantereine, 78711
                Mantes-la-Ville, France
              </Text>
            </View>
            <View style={style.contactInfoItem}>
              <Icon name="phone" style={style.contactInfoIcon} />
              <Text style={style.contactInfoItemLabel}>+423432532672</Text>
            </View>
            <View style={style.contactInfoItem}>
              <Icon name="mail" style={style.contactInfoIcon} />
              <Text style={style.contactInfoItemLabel}>
                Contact@Fidlight.com
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default React.memo(ExploreScreen);
