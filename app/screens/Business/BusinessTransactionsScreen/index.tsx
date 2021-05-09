/*
 *
 * BusinessTransactionsScreen
 *
 */

import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { buttonGradientProps } from 'theme/utils';

import TouchFeedback from 'theme/TouchFeedback';
import Icon from 'theme/Icon';
import Text from 'theme/Text';

import TransactionSection from './TransactionSection';
import style from './style';
import { BusinessTransactionsScreenProps } from './types';

function BusinessTransactionsScreen(_props: BusinessTransactionsScreenProps) {
  return (
    <>
      <View style={style.header}>
        <LinearGradient {...buttonGradientProps()} style={style.backdrop} />
        <View style={style.iconsWrapper}>
          <TouchFeedback onPress={() => null} style={style.menuIconWrapper}>
            <Icon name="menu" style={style.menuIcon} />
          </TouchFeedback>
          <Text style={style.entityName}>Alfredo poistano coffee</Text>
          <View />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainerStyle}
      >
        <TransactionSection />
      </ScrollView>
      <TouchFeedback onPress={() => null} style={style.addButtonWrapper}>
        <Icon name="gift" font="fidelight" style={style.addIcon} />
      </TouchFeedback>
    </>
  );
}

export default React.memo(BusinessTransactionsScreen);
