/*
 *
 * HomeScreen HomeTabView
 *
 */

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TabView } from 'react-native-tab-view';
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated';

import {
  CITY_SELECTION,
  ENTITY_SEARCH,
  PROFILE,
  QR_CODE,
} from 'router/routeNames';

import { useUser } from 'containers/Authentication';
import HomeHeader from 'components/HomeHeader';
import ExploreScreen from 'screens/ExploreScreen/Loadable';
import FavoriteEntitiesScreen from 'screens/FavoriteEntitiesScreen/Loadable';

import TabBarButton from './TabBarButton';
import style, { initialLayout } from './style';

function HomeTabView(props) {
  const user = useUser();
  const [routeIndex, setRouteIndex] = useState(0);
  const tabBarAnimation = useSharedValue(0);

  const [routes] = useState([
    { key: 'explore', icon: 'explore', font: 'fidelight' },
    { key: 'QR', major: true, icon: 'qr-code-sharp' },
    { key: 'favorites', icon: 'heart', font: 'ionicons' },
  ]);

  useEffect(() => {
    tabBarAnimation.value = withTiming(routeIndex, {
      duration: 100,
      easing: Easing.inOut(Easing.ease),
    });
  }, [routeIndex]);

  const renderTabBar = (tabBarProps) => (
    <View style={style.tabBarContainer}>
      {tabBarProps.navigationState.routes.map((route, i) => (
        <TabBarButton
          route={route}
          key={route.key}
          onPress={() => {
            if (route.major) {
              props.navigation.navigate(QR_CODE, {
                qrValue: `${user.data?.qrCode}.${user?.data?.id}`,
              });
              return;
            }
            tabBarProps.jumpTo(route.key);
          }}
          active={i === tabBarProps.navigationState.index}
        />
      ))}
    </View>
  );

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'explore':
        return (
          <ExploreScreen navigation={props.navigation} route={props.route} />
        );
      case 'favorites':
        return (
          <FavoriteEntitiesScreen
            navigation={props.navigation}
            route={props.route}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <HomeHeader
        onProfilePress={() => {
          props.navigation.navigate(PROFILE);
        }}
        onPressDrawer={props.onPressDrawer}
        onCityPress={() => {
          props.navigation.navigate(CITY_SELECTION);
        }}
        onSearchPress={() => props.navigation.navigate(ENTITY_SEARCH)}
      />
      <TabView
        lazy
        style={style.container}
        navigationState={{ index: routeIndex, routes }}
        initialLayout={initialLayout}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setRouteIndex}
        tabBarPosition="bottom"
        swipeEnabled={false}
      />
    </>
  );
}

export default React.memo(HomeTabView);
