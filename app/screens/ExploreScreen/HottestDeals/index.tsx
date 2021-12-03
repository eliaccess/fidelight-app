/*
 *
 * HottestDeals
 *
 */

import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import useStateHandler from 'hooks/useStateHandler';
import { DEAL_DETAIL, DEAL_LISTING } from 'router/routeNames';

import { useHotDeals } from 'containers/HotDeals';
import { useUserLocation } from 'containers/UserLocation';

import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Section from 'theme/Section';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';
import HorizontalSlidingList from 'theme/HorizontalSlidingList';
import NoResult from 'theme/NoResult';

import messages from './messages';
import style from './style';
import HottestDealsLoader from './Loader';

type HottestDealsProps = {
  navigation: any;
};

const HottestDeals: React.FC<HottestDealsProps> = (props) => {
  const userLocation = useUserLocation();

  const hotDeals = useHotDeals({
    city: userLocation.data.cityName,
  });

  const showContent = useStateHandler({
    state: hotDeals,
  });

  if (!showContent) {
    return (
      <HottestDealsLoader
        heading={<FormattedMessage {...messages.dealsHeading} isFragment />}
        numberOfItems={4}
      />
    );
  }

  return (
    <Animatable.View style={style.container} animation="fadeIn" duration={1500}>
      <Section
        heading={<FormattedMessage {...messages.dealsHeading} isFragment />}
        headerRight={
          hotDeals?.data ? (
            <TouchFeedback
              onPress={() => props.navigation.navigate(DEAL_LISTING)}
            >
              <FormattedMessage
                {...messages.seeAllLabel}
                style={style.seeAllLabel}
              />
            </TouchFeedback>
          ) : null
        }
      >
        {hotDeals?.data ? (
          <View>
            <HorizontalSlidingList>
              <View>
                <View style={style.listWrapper}>
                  {hotDeals.data
                    .slice(0, Math.ceil(hotDeals.data.length / 2))
                    .map((item) => (
                      <TouchFeedback
                        key={item.id}
                        onPress={() =>
                          props.navigation.navigate(DEAL_DETAIL, {
                            dealId: item.id,
                          })
                        }
                        style={style.item}
                      >
                        <Image
                          uri={
                            // item.pictureLink ||
                            'https://images.unsplash.com/photo-1544502779-9d192f5da63e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2045&q=80'
                          }
                          style={style.image}
                        />
                        <View style={style.contentWrapper}>
                          <Text style={style.title}>{item.name}</Text>
                          <Text
                            style={style.shortDescription}
                            numberOfLines={1}
                          >
                            {item.description}
                          </Text>
                        </View>
                      </TouchFeedback>
                    ))}
                </View>
                <View style={style.secondListWrapper}>
                  {hotDeals.data
                    .slice(
                      Math.ceil(hotDeals.data.length / 2),
                      hotDeals.data.length,
                    )
                    .map((item) => (
                      <TouchFeedback
                        key={item.id}
                        onPress={() =>
                          props.navigation.navigate(DEAL_DETAIL, {
                            dealId: item.id,
                          })
                        }
                        style={style.item}
                      >
                        <Image
                          uri={
                            // item.pictureLink ||
                            'https://images.unsplash.com/photo-1544502779-9d192f5da63e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2045&q=80'
                          }
                          style={style.image}
                        />
                        <View style={style.contentWrapper}>
                          <Text style={style.title}>{item.name}</Text>
                          <Text
                            style={style.shortDescription}
                            numberOfLines={1}
                          >
                            {item.description}
                          </Text>
                        </View>
                      </TouchFeedback>
                    ))}
                </View>
              </View>
            </HorizontalSlidingList>
          </View>
        ) : (
          <NoResult message={hotDeals?.message} />
        )}
      </Section>
    </Animatable.View>
  );
};

export default React.memo(HottestDeals);
