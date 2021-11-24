/**
 *
 * Modal
 *
 */
import React from 'react';
import { View, Modal } from 'react-native';
import Button from 'theme/Button';
import FormattedMessage from 'theme/FormattedMessage';
import messages from './messages';

import style from './style';

interface ModalProps {
  visible: boolean;
  onRequestClose: (...args: any[]) => any;
  children: React.ReactNode;
  modalContentStyle?: object;
}

function ModalComponent({ visible, onRequestClose, ...props }: ModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={style.modal}>
        <View
          style={[
            style.modalContent,
            props.modalContentStyle ? props.modalContentStyle : null,
          ]}
        >
          {props.children}
          <View style={style.closeButtonHolder}>
            <Button
              type="linear"
              onPress={onRequestClose}
              label={<FormattedMessage {...messages.close} isFragment />}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default ModalComponent;
