import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TabView } from 'react-native-tab-view';
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated';

import HomeHeader from 'components/HomeHeader';
import ExploreScreen from 'screens/ExploreScreen/Loadable';
import FavoriteEntitiesScreen from 'screens/FavoriteEntitiesScreen/Loadable';
import CommingSoonScreen from 'screens/CommingSoonScreen/Loadable';
import { CITY_SELECTION, COMMING_SOON, PROFILE } from 'router/routeNames';

import TabBarButton from './TabBarButton';
import { initialLayout, useGetStyles } from './style';

function HomeTabView(props) {
  const style = useGetStyles();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeIndex]);

  const renderTabBar = (tabBarProps) => (
    <View style={style.tabBarContainer}>
      {tabBarProps.navigationState.routes.map((route, i) => (
        <TabBarButton
          route={route}
          key={route.key}
          onPress={() => {
            if (route.major) {
              props.navigation.navigate(COMMING_SOON, {});
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
        // @ts-ignore
        return (
          <ExploreScreen navigation={props.navigation} route={props.route} />
        );
      case 'award':
        // @ts-ignore
        return <CommingSoonScreen />;
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
        // timingConfig={{ duration: 10 }}
      />
    </>
  );
}

export default React.memo(HomeTabView);
