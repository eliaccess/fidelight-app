import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TabView } from 'react-native-tab-view';
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated';

import { BUSINESS_PROFILE, BUSINESS_QR_CODE } from 'router/routeNames';

import BusinessExploreScreen from 'screens/Business/BusinessExploreScreen/Loadable';
import BusinessTransactionsScreen from 'screens/Business/BusinessTransactionsScreen/Loadable';

import BusinessHomeHeader from '../BusinessHomeHeader';
import style, { initialLayout } from './style';
import TabBarButton from './TabBarButton';

function HomeTabView(props) {
  const [activeExploreTabIndex, setActiveExploreTabIndex] = useState(0);
  const [routeIndex, setRouteIndex] = useState(0);
  const [routes] = useState([
    { key: 'explore', icon: 'businesshome', font: 'fidelight' },
    { key: 'QR', major: true, icon: 'qr-code-sharp' },
    { key: 'favorites', icon: 'transactions', font: 'fidelight' },
  ]);

  const tabBarAnimation = useSharedValue(0);

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
              props.navigation.navigate(BUSINESS_QR_CODE);
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
          <BusinessExploreScreen
            navigation={props.navigation}
            route={props.route}
            activeTabIndex={activeExploreTabIndex}
          />
        );
      case 'favorites':
        return (
          <BusinessTransactionsScreen
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
      <BusinessHomeHeader
        onPressDrawer={props.onPressDrawer}
        onCompanyPress={() => {
          props.navigation.navigate(BUSINESS_PROFILE);
        }}
        onExploreTabPress={(index) => setActiveExploreTabIndex(index)}
        activeExploreTabIndex={activeExploreTabIndex}
        routeIndex={routeIndex}
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
