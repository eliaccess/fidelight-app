/*
 *
 * HottestDeals
 *
 */

import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useHotDeals } from 'containers/HotDeals';
import useStateHandler from 'hooks/useStateHandler';

import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Section from 'theme/Section';
import Text from 'theme/Text';

import TouchFeedback from 'theme/TouchFeedback';
import HorizontalSlidingList from 'theme/HorizontalSlidingList';
import { DEAL_LISTING, ENTITY_DETAIL } from 'router/routeNames';

import messages from './messages';
import { useGetStyles } from './style';
import HottestDealsLoader from './Loader';

function HottestDeals(_props) {
  const style = useGetStyles();
  const navigation = useNavigation();
  const hotDeals = useHotDeals({
    city: 'Paris',
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

  if (!hotDeals.data) {
    return null;
  }
  const { length } = hotDeals.data;
  return (
    <Section
      heading={<FormattedMessage {...messages.dealsHeading} isFragment />}
      headerRight={
        <TouchFeedback onPress={() => navigation.navigate(DEAL_LISTING)}>
          <FormattedMessage
            {...messages.seeAllLabel}
            style={style.seeAllLabel}
          />
        </TouchFeedback>
      }
    >
      <View style={style.container}>
        <HorizontalSlidingList>
          <View>
            <View style={style.listWrapper}>
              {hotDeals.data.slice(0, Math.ceil(length / 2)).map((item) => (
                <TouchFeedback
                  key={item.id}
                  onPress={() => navigation.navigate(ENTITY_DETAIL)}
                  style={style.item}
                >
                  <Image uri={item.image} style={style.image} />
                  <View style={style.contentWrapper}>
                    <Text style={style.title}>{item.title}</Text>
                    <Text style={style.shortDescription} numberOfLines={1}>
                      {item.shortDescription}
                    </Text>
                  </View>
                </TouchFeedback>
              ))}
            </View>
            <View style={style.listWrapper}>
              {hotDeals.data
                .slice(Math.ceil(length / 2), length)
                .map((item) => (
                  <TouchFeedback
                    key={item.id}
                    onPress={() => navigation.navigate(ENTITY_DETAIL)}
                    style={style.item}
                  >
                    <Image uri={item.image} style={style.image} />
                    <View style={style.contentWrapper}>
                      <Text style={style.title}>{item.title}</Text>
                      <Text style={style.shortDescription} numberOfLines={1}>
                        {item.shortDescription}
                      </Text>
                    </View>
                  </TouchFeedback>
                ))}
            </View>
          </View>
        </HorizontalSlidingList>
      </View>
    </Section>
  );
}

export default React.memo(HottestDeals);
