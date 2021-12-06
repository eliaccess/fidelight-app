/*
 *
 * BusinessHomeHeader
 *
 */

import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useUser } from 'containers/Business/BusinessAuthentication';

import FormattedMessage from 'theme/FormattedMessage';
import { buttonGradientProps } from 'theme/utils';
import TouchFeedback from 'theme/TouchFeedback';
import Icon from 'theme/Icon';
import Text from 'theme/Text';

import style from './style';
import messages from './messages';

type BusinessHomeHeader = {
  title?: string;
  onPressDrawer: (...arg: any) => any;
  onCompanyPress: () => void;
  activeExploreTabIndex: number;
  onExploreTabPress: (activeTabIndex: number) => void;
  routeIndex: number;
};

function BusinessHomeHeader(props: BusinessHomeHeader) {
  const user = useUser();

  return (
    <View
      style={[
        style.container,
        props.routeIndex === 1 ? style.lessHeight : null,
      ]}
    >
      <LinearGradient
        {...buttonGradientProps()}
        style={[
          style.backdrop,
          props.routeIndex === 2 ? style.lessHeight : null,
        ]}
      />
      <View style={style.iconsWrapper}>
        <TouchFeedback
          onPress={props.onPressDrawer}
          style={style.menuIconWrapper}
        >
          <Icon name="menu" style={style.menuIcon} />
        </TouchFeedback>
        <TouchFeedback
          onPress={props.onCompanyPress}
          style={style.companyNameWrapper}
        >
          <Text style={style.companyName}>{user?.data?.name}</Text>
          <Icon name="chevron-down" style={style.companyNameIcon} />
        </TouchFeedback>
        <View />
      </View>

      {props.routeIndex === 0 ? (
        <View style={style.tabContainer}>
          <TouchFeedback
            onPress={() => props.onExploreTabPress(0)}
            style={[
              style.tab,
              props.activeExploreTabIndex === 0 ? style.activeTab : null,
            ]}
          >
            <FormattedMessage
              {...messages.offersLabel}
              style={[
                style.tabLabel,
                props.activeExploreTabIndex === 0 ? style.activeTab : null,
              ]}
            />
          </TouchFeedback>

          <TouchFeedback
            onPress={() => props.onExploreTabPress(1)}
            style={[
              style.tab,
              props.activeExploreTabIndex === 1 ? style.activeTab : null,
            ]}
          >
            <FormattedMessage
              {...messages.rewardsLabel}
              style={[
                style.tabLabel,
                props.activeExploreTabIndex === 1 ? style.activeTab : null,
              ]}
            />
          </TouchFeedback>
        </View>
      ) : null}
    </View>
  );
}

export default React.memo(BusinessHomeHeader);
