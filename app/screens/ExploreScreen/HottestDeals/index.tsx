/*
 *
 * HottestDeals
 *
 */

import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Section from 'theme/Section';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';
import { DEAL_LISTING, ENTITY_DETAIL } from 'router/routeNames';

import messages from './messages';
import style from './style';
import Deals from './data';

function HottestDeals(_props) {
  const navigation = useNavigation();
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
        {Deals.map((item) => (
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
    </Section>
  );
}

export default React.memo(HottestDeals);
