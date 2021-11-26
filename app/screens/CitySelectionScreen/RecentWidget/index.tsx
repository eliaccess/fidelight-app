/**
 *
 * RecentWidget
 *
 */

import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View as AnimatableView } from 'react-native-animatable';
import Text from 'theme/Text';

import RecentCard from './RecentCard';
import style from './style';

type RecentWidgetProps = {
  onPress: (...args: any) => any;
  data: {
    name: string;
  }[];
  headingKey: React.ReactNode;
};

function RecentWidget(props: RecentWidgetProps) {
  if (!props.data || props.data?.length === 0) {
    return null;
  }
  return (
    <AnimatableView
      animation="fadeIn"
      easing="ease-out"
      duration={1000}
      style={style.container}
    >
      <Text style={style.heading}>{props.headingKey}</Text>
      <ScrollView
        horizontal
        style={style.scrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.scrollViewContent}
      >
        {
          // @ts-ignore
          props.data?.map((item) => (
            <RecentCard
              key={item.name}
              onPress={() => props.onPress({ name: item.name })}
              data={item}
            />
          ))
        }
      </ScrollView>
    </AnimatableView>
  );
}

export default RecentWidget;
