/**
 *
 * Modal
 *
 */
import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import RNModal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'theme/Icon';
import TouchFeedback from 'theme/TouchFeedback';
import Text from 'theme/Text';
import style from './style';

interface ModalProps {
  visible: boolean;
  onRequestClose: (...args: any[]) => any;
  children: React.ReactNode;
  heading: React.ReactNode;
  headerRight?: React.ReactNode;
  footer?: React.ReactNode;
  contentContainerStyle?: {};
}

function Modal(props: ModalProps) {
  return (
    <RNModal
      isVisible={props.visible}
      hasBackdrop
      coverScreen={false}
      backdropOpacity={0.8}
      style={style.modal}
      onBackdropPress={props.onRequestClose}
    >
      <View style={style.container}>
        <View style={style.header}>
          <TouchFeedback onPress={props.onRequestClose}>
            <Icon name="x" style={style.headerIcon} />
          </TouchFeedback>
          <Text style={style.headerTitle} numberOfLines={1}>
            {props.heading}
          </Text>
          {props.headerRight ? props.headerRight : <View />}
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView
            style={style.scrollView}
            contentContainerStyle={[
              style.scrollContent,
              props.contentContainerStyle,
            ]}
            bounces={false}
            keyboardShouldPersistTaps="handled"
          >
            {props.children}
          </ScrollView>
        </KeyboardAvoidingView>
        <View style={style.footer}>{props.footer}</View>
      </View>
    </RNModal>
  );
}
export default Modal;
