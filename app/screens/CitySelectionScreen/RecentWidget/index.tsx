/**
 *
 * RecentWidget
 *
 */

import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View as AnimatableView } from 'react-native-animatable';

import { RecentSelectCityItem } from 'containers/RecentSelectedCities/types';

import Text from 'theme/Text';

import RecentCard from './RecentCard';
import style from './style';

type RecentWidgetProps = {
  onPress: (...args: any) => any;
  data?: RecentSelectCityItem[];
  headingKey: React.ReactNode;
};

const RecentWidget: React.FC<RecentWidgetProps> = (props) => {
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
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.scrollViewContent}
      >
        {props.data?.map((item) => (
          <RecentCard
            key={item.name}
            onPress={() => props.onPress({ name: item.name })}
            data={item}
          />
        ))}
      </ScrollView>
    </AnimatableView>
  );
};

export default React.memo(RecentWidget);
