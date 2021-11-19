/*
 *
 * BusinessProfileScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import { useBusinessProfile } from 'containers/Business/BusinessProfile';

import Screen from 'theme/Screen';
import { EDIT_BUSINESS_INFO } from 'router/routeNames';

import DealsSection from './DealsSection';
import EntityInfo from './EntityInfo';
import EntityTimings from './EntityTimings';
import EntityHeader from './Header';

import style from './style';

import { BusinessProfileScreenProps } from './types';

function BusinessProfileScreen(props: BusinessProfileScreenProps) {
  const entityDetail = useBusinessProfile();

  return (
    <Screen testID="BusinessProfileScreen" headerVisibilityThreshold={80}>
      <View style={style.container}>
        {entityDetail?.data ? (
          <>
            <EntityHeader data={entityDetail.data} />
            <EntityInfo
              data={entityDetail.data}
              onEditPress={() => {
                props.navigation.navigate(EDIT_BUSINESS_INFO);
              }}
            />
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
        ) : null}
      </View>
    </Screen>
  );
}

export default React.memo(BusinessProfileScreen);
