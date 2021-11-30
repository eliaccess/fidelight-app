import React, { useState } from 'react';
import { View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Button from 'theme/Button';

import FormattedMessage from 'theme/FormattedMessage';
import Icon from 'theme/Icon';
import Modal from 'theme/Modal';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';

import messages from './messages';
import style from './style';

type ITimingForm = {
  visible: boolean;
  onRequestClose: (...args: any) => any;
  id: string;
  onSubmit: (...args: any) => any;
};

const TimingForm: React.FC<ITimingForm> = ({
  visible = false,
  id,
  ...props
}) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [openStartTime, setOpenStartTime] = useState(false);
  const [openEndTime, setOpenEndTime] = useState(false);

  return (
    <>
      <Modal visible={visible} onRequestClose={props.onRequestClose}>
        <View style={style.modalContent}>
          <FormattedMessage {...messages.addTimings} style={style.addTimings} />
          <View style={style.formContainer}>
            <TouchFeedback
              onPress={() => setOpenStartTime(true)}
              style={style.inputContainer}
            >
              <View style={style.timeLabelWrapper}>
                <Text style={style.timeLabel}>
                  {startTime ? 'Start Time' : 'Select Opening Time'}
                </Text>
                {startTime ? <Text>{startTime}</Text> : null}
              </View>
              <Icon name="chevron-down" style={style.inputRightIcon} />
            </TouchFeedback>
            <TouchFeedback
              onPress={() => setOpenEndTime(true)}
              style={style.inputContainer}
            >
              <View style={style.timeLabelWrapper}>
                <Text style={style.timeLabel}>
                  {endTime ? 'End Time' : 'Select Closing Time'}
                </Text>
                {endTime ? <Text>{endTime}</Text> : null}
              </View>
              <Icon name="chevron-down" style={style.inputRightIcon} />
            </TouchFeedback>
          </View>
          <View style={style.submitButtonWrapper}>
            <Button
              flex
              disabled={!startTime || !endTime}
              type="accent"
              onPress={() => {
                props.onRequestClose();
                props.onSubmit({
                  id: new Date().toString(),
                  startTime,
                  endTime,
                  day: id,
                });
                setStartTime('');
                setEndTime('');
              }}
              label="Submit"
            />
          </View>
        </View>

        <DateTimePickerModal
          isVisible={openStartTime}
          mode="time"
          onConfirm={(time) => {
            const updateTime = `${time
              .toTimeString()
              .split(' ')[0]
              .slice(0, 6)}00`;
            setOpenStartTime(false);
            setStartTime(updateTime);
          }}
          onCancel={() => {
            setOpenStartTime(false);
          }}
          locale="en_GB"
          is24Hour
        />
        <DateTimePickerModal
          isVisible={openEndTime}
          mode="time"
          onConfirm={(time) => {
            const updateTime = `${time
              .toTimeString()
              .split(' ')[0]
              .slice(0, 6)}00`;
            setOpenEndTime(false);
            setEndTime(updateTime);
          }}
          onCancel={() => {
            setOpenEndTime(false);
          }}
          locale="en_GB"
          is24Hour
        />
      </Modal>
    </>
  );
};

export default TimingForm;
