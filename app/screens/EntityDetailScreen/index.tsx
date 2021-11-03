/*
 *
 * EntityDetailScreen
 *
 */

import { useEntityDetail } from 'containers/EntityDetail';
import useStateHandler from 'hooks/useStateHandler';
import React, { useState } from 'react';
import { View } from 'react-native';

// import FormattedMessage from 'theme/FormattedMessage';
import Icon from 'theme/Icon';

import Screen from 'theme/Screen';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';

import DealsSection from './DealsSection';
import EntityInfo from './EntityInfo';
import EntityHeader from './Header';
import EntityDetailLoader from './Loader';
// import messages from './messages';
import RewardsSection from './RewardsSection';
import style from './style';

import { EntityDetailScreenProps } from './types';

function EntityDetailScreen(props: EntityDetailScreenProps) {
  const [showWeeklyTimings, setShowWeeklyTimings] = useState(false);
  const entityDetail = useEntityDetail({
    entityId: props.route.params.entityId,
  });

  const showContent = useStateHandler({
    state: entityDetail,
    stateIdentifier: 'data.name',
  });

  if (!showContent) {
    return <EntityDetailLoader />;
  }

  if (!entityDetail.data) {
    return null;
  }

  return (
    <Screen testID="EntityDetailScreen" headerVisibilityThreshold={80}>
      <View style={style.container}>
        <EntityHeader />
        <EntityInfo />
        <View style={style.timingsContainer}>
          {entityDetail.data.schedule.map((item, index) => {
            const activeDay = new Date().getDay() === item.day;
            if (index > 0 && !showWeeklyTimings) {
              return null;
            }
            return (
              <View style={style.timeItem}>
                <Text
                  style={[style.dayName, activeDay ? style.activeDay : null]}
                >
                  {item.dayName}
                </Text>
                <View style={style.dayTimingsWrapper}>
                  <View style={style.dayTimingItem}>
                    <Text
                      style={[
                        style.timingItemLabel,
                        activeDay ? style.activeDay : null,
                      ]}
                    >
                      {item.openAM.slice(0, 5)}:AM{` - `}
                    </Text>
                    <Text
                      style={[
                        style.timingItemLabel,
                        activeDay ? style.activeDay : null,
                      ]}
                    >
                      {item.closeAM.slice(0, 5)}:AM
                    </Text>
                  </View>
                  <View style={style.dayTimingItem}>
                    <Text
                      style={[
                        style.timingItemLabel,
                        activeDay ? style.activeDay : null,
                      ]}
                    >
                      {item.openPM.slice(0, 5)}:PM{` - `}
                    </Text>
                    <Text
                      style={[
                        style.timingItemLabel,
                        activeDay ? style.activeDay : null,
                      ]}
                    >
                      {item.closePm.slice(0, 5)}:PM
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}

          <TouchFeedback
            onPress={() => setShowWeeklyTimings(!showWeeklyTimings)}
            style={style.timingIconWrapper}
          >
            <Icon
              name={showWeeklyTimings ? 'chevron-up' : 'chevron-down'}
              style={style.timingIcon}
            />
          </TouchFeedback>
        </View>
        <View style={style.sectionWrapper}>
          <DealsSection onPress={() => null} />
        </View>
        <RewardsSection />
      </View>
    </Screen>
  );
}

export default React.memo(EntityDetailScreen);
