/*
 *
 * PreferenceScreen
 *
 */

import React, { useState } from 'react';
import { Switch, View } from 'react-native';

import Colors from 'theme/Colors';
import FormattedMessage from 'theme/FormattedMessage';
import Screen from 'theme/Screen';
import Text from 'theme/Text';

import style from './style';
import messages from './messages';

import { PreferenceScreenProps } from './types';

const PreferenceScreen: React.FC<PreferenceScreenProps> = () => {
  const [p1, setP1] = useState(false);
  const [p2, setP2] = useState(false);

  return (
    <Screen
      testID="PreferenceScreen"
      headerTitle={<FormattedMessage {...messages.title} isFragment />}
    >
      <View style={style.container}>
        <View style={style.itemWrapper}>
          <View style={style.content}>
            <Text style={style.itemTitle}>
              Notify when you new offer available
            </Text>
            <Text style={style.itemDescription}>Push notifications</Text>
          </View>

          <Switch
            trackColor={{ false: Colors.textGrey, true: Colors.accent }}
            thumbColor={p1 ? Colors.white : Colors.white}
            onValueChange={() => setP1(!p1)}
            value={p1}
          />
        </View>
        <View style={style.itemWrapper}>
          <View style={style.content}>
            <Text style={style.itemTitle}>Saved store notifications</Text>
          </View>

          <Switch
            trackColor={{ false: Colors.textGrey, true: Colors.accent }}
            thumbColor={p2 ? Colors.white : Colors.white}
            onValueChange={() => setP2(!p2)}
            value={p2}
          />
        </View>
      </View>
    </Screen>
  );
};

export default React.memo(PreferenceScreen);
