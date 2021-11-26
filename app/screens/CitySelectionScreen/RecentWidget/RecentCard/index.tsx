/**
 *
 * RecentCard
 *
 */
import React from 'react';
import { View } from 'react-native';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';
import style from './style';
type RecentCardProps = {
  data: {
    name: string;
  };
  onPress: (...args: any[]) => any;
};
const RecentCard: React.FC<RecentCardProps> = (props) => (
  <TouchFeedback style={style.container} onPress={props.onPress}>
    <View style={style.tagStyle}>
      <Text style={style.tagName} numberOfLines={2}>
        {props.data.name}
      </Text>
    </View>
  </TouchFeedback>
);

export default RecentCard;
