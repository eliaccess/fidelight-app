/**
 *
 * HorizontalSlidingList
 *
 */
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import style from './style';

interface HorizontalSlidingListProps {
  children: React.ReactNode;
}

const HorizontalSlidingList: React.FC<HorizontalSlidingListProps> = (props) => (
  <ScrollView
    horizontal
    bounces={false}
    style={style.container}
    contentContainerStyle={style.scrollerContent}
    showsHorizontalScrollIndicator={false}
    scrollEventThrottle={16}
  >
    {props.children}
  </ScrollView>
);

export default HorizontalSlidingList;
