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

import { useEntityOffersRewards } from 'containers/EntityOffersRewards';
import useStateHandler from 'hooks/useStateHandler';

import { BUSINESS_DEAL_LISTING, DEAL_DETAIL } from 'router/routeNames';
import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Section from 'theme/Section';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';
import NoResult from 'theme/NoResult';

import messages from '../messages';
import style from './style';

import Pagination from './Pagination';
import DealsSectionLoader from './Loader';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

type DealsSectionProps = {
  entityId: number;
  navigation: any;
};
function DealsSection(props: DealsSectionProps) {
  const entityOffersRewards = useEntityOffersRewards({
    entityId: props.entityId,
  });

  const showContent = useStateHandler({
    state: entityOffersRewards,
    stateIdentifier: 'data.offers.length',
  });
  const scrollX = useRef(useSharedValue(0)).current;

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  if (!showContent) {
    return (
      <DealsSectionLoader
        heading={<FormattedMessage {...messages.weeksDealHeading} isFragment />}
      />
    );
  }
  const deals = entityOffersRewards?.data?.offers;

  return (
    <Section
      heading={<FormattedMessage {...messages.weeksDealHeading} isFragment />}
      headerRight={
        deals ? (
          <TouchFeedback
            onPress={() => props.navigation.navigate(BUSINESS_DEAL_LISTING)}
          >
            <FormattedMessage
              {...messages.seeAllLabel}
              style={style.seeAllLabel}
            />
          </TouchFeedback>
        ) : null
      }
    >
      {deals ? (
        <>
          <AnimatedFlatList
            data={deals}
            decelerationRate="fast"
            renderItem={({ item }: any) => (
              <TouchFeedback
                onPress={() => {
                  props.navigation.navigate(DEAL_DETAIL, {
                    dealId: item.id,
                  });
                }}
                style={style.itemWrapper}
              >
                <View style={style.ellipse} />
                <View style={style.innerEllipse} />

                <View style={style.itemContent}>
                  <Text style={style.title}>{item.name}</Text>
                  <Text style={style.shortDescription}>{item.description}</Text>
                </View>
                <Image title="dealImage" style={style.dealImage} />
              </TouchFeedback>
            )}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            horizontal
            onScroll={scrollHandler}
          />
          <Pagination length={deals ? deals.length : 3} scrollX={scrollX} />
        </>
      ) : (
        <NoResult message={entityOffersRewards?.message} />
      )}
    </Section>
  );
}

export default React.memo(DealsSection);
