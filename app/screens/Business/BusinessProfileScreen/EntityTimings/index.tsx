/*
 *
 * EntityDetail EntityTimings
 *
 */

import React, { useState } from 'react';
import { View } from 'react-native';

import Icon from 'theme/Icon';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';
import FormattedMessage from 'theme/FormattedMessage';

import style from './style';
import messages from '../messages';

type EntityTimingsProps = {
  data: IBusinessUser;
};

function EntityTimings(props: EntityTimingsProps) {
  const [showWeeklyTimings, setShowWeeklyTimings] = useState(false);
  return (
    <View style={style.timingsContainer}>
      {props.data.schedule.map((item, index) => {
        const activeDay = new Date().getDay() === item.day;
        if (index > 0 && !showWeeklyTimings) {
          return null;
        }
        return (
          <View style={style.timeItem}>
            <Text style={[style.dayName, activeDay ? style.activeDay : null]}>
              {item.dayName}
            </Text>
            <View style={style.dayTimingsWrapper}>
              {item.openAM && item.closeAM ? (
                <View style={style.dayTimingItem}>
                  <Text
                    style={[
                      style.timingItemLabel,
                      activeDay ? style.activeDay : null,
                    ]}
                  >
                    {item.openAM?.slice(0, 5)}:AM{` - `}
                  </Text>
                  <Text
                    style={[
                      style.timingItemLabel,
                      activeDay ? style.activeDay : null,
                    ]}
                  >
                    {item.closeAM?.slice(0, 5)}:AM
                  </Text>
                </View>
              ) : null}
              {item.openPM && item.closePm ? (
                <View style={style.dayTimingItem}>
                  <Text
                    style={[
                      style.timingItemLabel,
                      activeDay ? style.activeDay : null,
                    ]}
                  >
                    {item.openPM?.slice(0, 5)}:PM{` - `}
                  </Text>
                  <Text
                    style={[
                      style.timingItemLabel,
                      activeDay ? style.activeDay : null,
                    ]}
                  >
                    {item.closePm?.slice(0, 5)}:PM
                  </Text>
                </View>
              ) : (
                <FormattedMessage
                  {...messages.closedLabel}
                  style={style.closedLabel}
                />
              )}
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
  );
}

export default React.memo(EntityTimings);
