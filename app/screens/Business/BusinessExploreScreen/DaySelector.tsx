/*
 *
 * DaySelector
 *
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Text from 'theme/Text';
import FormattedMessage from 'theme/FormattedMessage';
import { buttonGradientProps } from 'theme/utils';
import TouchFeedback from 'theme/TouchFeedback';

import style from './style';
import messages from './messages';

const days = [
  {
    key: 'monday',
    name: 'Mon',
  },
  {
    key: 'tuesday',
    name: 'Tue',
  },
  {
    key: 'wednesday',
    name: 'Wed',
  },
  {
    key: 'thursday',
    name: 'Thu',
  },
  {
    key: 'friday',
    name: 'Fri',
  },
  {
    key: 'saturday',
    name: 'Star',
  },
  {
    key: 'sunday',
    name: 'Sun',
  },
];

type DaySelectorProps = {
  onSelect: (...args: any) => any;
  activeDays?: string[];
};

function DaySelector(props: DaySelectorProps) {
  const [activeDays, setActiveDays] = useState(props?.activeDays || []);
  return (
    <>
      <FormattedMessage
        {...messages.daySelectionLabel}
        style={style.daySelectionLabel}
      />
      <View style={style.daySelectorWrapper}>
        {days.map((item) => {
          // @ts-ignore
          const active =
            activeDays?.length > 0 &&
            activeDays?.findIndex((i) => i === item.key) !== -1;
          return (
            <TouchFeedback
              key={item.key}
              onPress={() => {
                if (active) {
                  const newDays = activeDays?.filter((i) => i !== item.key);
                  setActiveDays(newDays);
                  props.onSelect(item.key, 0);
                  return;
                }
                props.onSelect(item.key, 1);
                // @ts-ignore
                setActiveDays([...activeDays, item.key]);
              }}
              style={style.item}
            >
              {active ? (
                <LinearGradient
                  {...buttonGradientProps()}
                  style={style.daySelectorBackdrop}
                />
              ) : null}
              <Text
                style={[style.itemName, active ? style.activeItem : null]}
                numberOfLines={1}
              >
                {item.name}
              </Text>
            </TouchFeedback>
          );
        })}
      </View>
    </>
  );
}

export default React.memo(DaySelector);
