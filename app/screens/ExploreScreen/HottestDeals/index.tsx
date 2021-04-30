/*
 *
 * HottestDeals
 *
 */

import React from 'react';
import { View } from 'react-native';

import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Section from 'theme/Section';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';

import messages from './messages';
import style from './style';
import Categories from './data';

function HottestDeals(_props) {
  return (
    <Section
      heading={<FormattedMessage {...messages.dealsHeading} isFragment />}
      headerRight={
        <FormattedMessage {...messages.seeAllLabel} style={style.seeAllLabel} />
      }
    >
      <View style={style.container}>
        {Categories.map((item) => (
          <TouchFeedback onPress={() => null} style={style.item}>
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
