/*
 *
 * CitySelectionScreen
 *
 */

import React, { useCallback } from 'react';
import { View } from 'react-native';

import Screen from 'theme/Screen';
import FormattedMessage from 'theme/FormattedMessage';

import { useUserLocation } from 'containers/UserLocation';
import { HOME } from 'router/routeNames';
import { useRecentSelectedCities } from 'containers/RecentSelectedCities';

import TypeAhead from './TypeAhead';
import messages from './messages';
import style from './style';

import { CitySelectionScreenProps } from './types';

import RecentWidget from './RecentWidget';

function CitySelectionScreen(props: CitySelectionScreenProps) {
  const userLocation = useUserLocation();
  const recentSelectedCities = useRecentSelectedCities();

  const onSelect = useCallback((item: any) => {
    userLocation.setCity({
      cityName: item.nom,
    });
    setTimeout(() => {
      recentSelectedCities.submit({
        data: { name: item.nom },
      });
      navigate();
    }, 100);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useCallback(() => {
    if (props.navigation.canGoBack()) {
      props.navigation.navigate(HOME, {});
      return;
    }
    props.navigation.reset({
      index: 0,
      routes: [
        {
          name: HOME,
          params: {},
        },
      ],
    });
  }, [props.navigation]);

  const onRecentPress = (item) => {
    userLocation.setCity({
      cityName: item.name,
    });
    setTimeout(() => {
      navigate();
    }, 100);
  };

  return (
    <>
      <Screen testID="locationsScreen" useScrollView={false}>
        <View style={style.container}>
          <FormattedMessage {...messages.pitch} style={style.pitch} />

          <TypeAhead onSelect={onSelect} />

          {recentSelectedCities.data?.length !== 0 && (
            <RecentWidget
              headingKey={
                <FormattedMessage
                  {...messages.recentSelectedCitiesLabel}
                  style={style.recentSelectedCitiesLabel}
                  isFragment
                />
              }
              // @ts-ignore
              data={recentSelectedCities.data}
              onPress={onRecentPress}
            />
          )}
        </View>
      </Screen>
    </>
  );
}

export default CitySelectionScreen;
