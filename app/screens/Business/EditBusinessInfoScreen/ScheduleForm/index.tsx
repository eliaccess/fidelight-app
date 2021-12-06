/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import FormattedMessage from 'theme/FormattedMessage';
import TouchFeedback from 'theme/TouchFeedback';
import Button from 'theme/Button';
import Icon from 'theme/Icon';
import Text from 'theme/Text';

import style from './style';
import TimingForm from './TimingForm';
import messages from './messages';

type ScheduleFormProps = {
  onSubmit: (...args: any) => void;
  initialData: {
    day: number;
    openAM: string;
    closeAM: string;
    openPM: string;
    closePm: string;
    dayName: string;
  }[];
};

const ScheduleForm: React.FC<ScheduleFormProps> = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [pressedDay, setPressedDay] = useState('');
  const [days, setDays] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

  useEffect(() => {
    if (props.initialData) {
      props.initialData.map((item, index) => {
        days[item.dayName] = [
          {
            id: new Date().toString() + item.openAM,
            startTime: item.openAM,
            endTime: item.closeAM,
          },
        ];
        if (item.openPM && item.closePm) {
          days[item.dayName].push({
            id: new Date().toString() + item.openPM,
            startTime: item.openPM,
            endTime: item.closePm,
          });
        }
      });
      setDays(days);
      // @ts-ignore
      setShowForm('');
    }
  }, [props]);

  return (
    <>
      {Object.keys(days).map((key) => (
        <View
          style={[
            style.itemContainer,
            days[key].length > 0 ? style.activeItem : null,
          ]}
        >
          <View style={style.itemContent}>
            <View style={style.dayWrapper}>
              <View style={style.radioSymbol}>
                <View style={style.innerRadio} />
              </View>
              <Text style={style.day}>{key}</Text>
            </View>

            <View style={style.startEndTimeHolder}>
              {days[key].map((item) => (
                <View style={style.timeWrapper}>
                  <Text style={style.timings}>
                    {item.startTime} - {item.endTime}
                  </Text>

                  <TouchFeedback
                    onPress={() => {
                      const updateDayTimes = days[key].filter(
                        (time) => item.id !== time.id,
                      );
                      days[key] = updateDayTimes;
                      setDays({
                        ...days,
                        [key]: updateDayTimes,
                      });
                    }}
                    style={style.deleteButton}
                  >
                    <Icon name="x" style={style.actionIcon} />
                  </TouchFeedback>
                </View>
              ))}
            </View>
            {days[key].length === 0 ? (
              <TouchFeedback
                onPress={() => {
                  setShowForm(true);
                  setPressedDay(key);
                }}
                style={style.addTimingButton}
              >
                <Icon name="plus" style={style.actionIcon} />
              </TouchFeedback>
            ) : null}
          </View>
          {days[key].length > 0 && days[key].length < 2 ? (
            <TouchFeedback
              onPress={() => {
                setShowForm(true);
                setPressedDay(key);
              }}
              style={style.addTimingButton}
            >
              <Icon name="plus" style={style.actionIcon} />
            </TouchFeedback>
          ) : null}
        </View>
      ))}
      <View style={style.submitButtonWrapper}>
        <Button
          large
          flex
          label={
            <FormattedMessage {...messages.saveAvailabilityLabel} isFragment />
          }
          onPress={() => {
            const schedule: any = [];
            Object.keys(days).map((d, index) => {
              if (days[d].length > 0) {
                const timing: any = {
                  day: index + 1,
                };
                if (days[d].length === 1) {
                  timing.openAm = days[d][0].startTime;
                  timing.closeAm = days[d][0].endTime;
                  timing.openPm = null;
                  timing.closePm = null;
                  schedule.push(timing);
                  return;
                }
                days[d].map((t, i) => {
                  if (i === 0) {
                    timing.openAm = t.startTime;
                    timing.closeAm = t.endTime;
                    return;
                  }
                  timing.openPm = t.startTime;
                  timing.closePm = t.endTime;
                });
                schedule.push(timing);
              }
            });
            props.onSubmit(schedule);
          }}
        />
      </View>
      <TimingForm
        visible={showForm}
        onRequestClose={() => setShowForm(false)}
        id={pressedDay}
        onSubmit={(data) => {
          days[data.day].push(data);
          setDays(days);
        }}
      />
    </>
  );
};

export default ScheduleForm;
