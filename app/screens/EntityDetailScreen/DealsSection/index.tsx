/*
 *
 * DealsSection
 *
 */

import React, { useRef } from 'react';
import { FlatList, View } from 'react-native';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { DEAL_LISTING } from 'router/routeNames';
import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Section from 'theme/Section';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';

import messages from '../messages';
import style from './style';
import { deals } from './data';
import Pagination from './Pagination';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

function DealsSection(props) {
  const scrollX = useRef(useSharedValue(0)).current;

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <Section
      heading={<FormattedMessage {...messages.weeksDealHeading} isFragment />}
      headerRight={
        <TouchFeedback onPress={() => props.navigation.navigate(DEAL_LISTING)}>
          <FormattedMessage
            {...messages.seeAllLabel}
            style={style.seeAllLabel}
          />
        </TouchFeedback>
      }
    >
      <>
        <AnimatedFlatList
          data={deals}
          decelerationRate="fast"
          renderItem={({ item }: any) => (
            <View style={style.itemWrapper}>
              <View style={style.ellipse} />
              <View style={style.innerEllipse} />

              <View style={style.itemContent}>
                <Text style={style.title}>{item.title}</Text>
                <Text style={style.shortDescription}>
                  {item.shortDescription}
                </Text>
              </View>
              <Image title="dealImage" style={style.dealImage} />
            </View>
          )}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          onScroll={scrollHandler}
        />
        <Pagination scrollX={scrollX} />
      </>
    </Section>
  );
}

export default React.memo(DealsSection);
