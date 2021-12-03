/**
 *
 * RecentWidget
 *
 */

import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View as AnimatableView } from 'react-native-animatable';

import { ENTITY_DETAIL } from 'router/routeNames';
import { EntityDetailItemTypes } from 'types/EntityItemTypes';

import FormattedMessage from 'theme/FormattedMessage';

import RecentCard from './RecentCard';
import messages from './messages';
import style from './style';

type RecentWidgetProps = {
  navigate: (...args: any) => any;
  data?: EntityDetailItemTypes[];
};

const RecentWidget: React.FC<RecentWidgetProps> = (props) => {
  const onPressEntity = (entity) => {
    props.navigate(ENTITY_DETAIL, {
      entityId: entity.id,
    });
  };

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
      <FormattedMessage
        {...messages.recentViewedEntities}
        style={style.heading}
      />
      <ScrollView
        horizontal
        style={style.scrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.scrollViewContent}
      >
        {props.data?.map((item) => (
          <RecentCard
            key={item.id || item.name}
            onPress={() => {
              onPressEntity(item);
            }}
            data={item}
          />
        ))}
      </ScrollView>
    </AnimatableView>
  );
};

export default React.memo(RecentWidget);
