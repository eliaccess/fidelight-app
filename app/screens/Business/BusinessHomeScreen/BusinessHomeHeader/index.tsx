/*
 *
 * BusinessHomeHeader
 *
 */

import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useUser } from 'containers/Business/BusinessAuthentication';

import Icon from 'theme/Icon';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';
import { buttonGradientProps } from 'theme/utils';
import FormattedMessage from 'theme/FormattedMessage';

import { useGetStyles } from './style';
import messages from './messages';

type BusinessHomeHeader = {
  title?: string;
  onPressDrawer: (...arg: any) => any;
  onCompanyPress: () => void;
  activeExploreTabIndex: number;
  onExploreTabPress: (activeTabIndex: number) => void;
};

function BusinessHomeHeader(props: BusinessHomeHeader) {
  const style = useGetStyles();
  const user = useUser();

  return (
    <View style={style.container}>
      <LinearGradient {...buttonGradientProps()} style={style.backdrop} />
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
    </View>
  );
}

export default React.memo(BusinessHomeHeader);
