/*
 *
 * BusinessProfileScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import { EDIT_BUSINESS_INFO } from 'router/routeNames';

import { useBusinessProfile } from 'containers/Business/BusinessProfile';

import TouchFeedback from 'theme/TouchFeedback';
import Screen from 'theme/Screen';
import Icon from 'theme/Icon';

import EntityTimings from './EntityTimings';
import DealsSection from './DealsSection';
import EntityInfo from './EntityInfo';
import EntityHeader from './Header';
import style from './style';

import { BusinessProfileScreenProps } from './types';
import BusinessProfileScreenLoader from './Loader';

const BusinessProfileScreen: React.FC<BusinessProfileScreenProps> = (props) => {
  const entityDetail = useBusinessProfile();

  return (
    <Screen
      testID="BusinessProfileScreen"
      headerVisibilityThreshold={80}
      headerRight={
        entityDetail?.data ? (
          <TouchFeedback
            onPress={() => {
              props.navigation.navigate(EDIT_BUSINESS_INFO);
            }}
            style={style.editIconWrapper}
          >
            <Icon name="edit" style={style.editIcon} />
          </TouchFeedback>
        ) : null
      }
    >
      <View style={style.container}>
        {entityDetail?.data?.id ? (
          <>
            <EntityHeader data={entityDetail.data} />
            <EntityInfo data={entityDetail.data} />
            {entityDetail.data?.schedule ? (
              <EntityTimings data={entityDetail.data} />
            ) : null}

            <View style={style.sectionWrapper}>
              <DealsSection
                entityId={entityDetail.data.id}
                navigation={props.navigation}
              />
            </View>
          </>
        ) : (
          <BusinessProfileScreenLoader />
        )}
      </View>
    </Screen>
  );
};

export default React.memo(BusinessProfileScreen);
