/*
 *
 * BusinessExploreOffers
 *
 */

import React from 'react';
import { View } from 'react-native';

import FormattedMessage from 'theme/FormattedMessage';
import Text from 'theme/Text';
import Icon from 'theme/Icon';

import Image from 'theme/Image';

import style from './style';
import messages from '../messages';

const data = [
  {
    id: 1,
    title: 'UPTO 30% OFF',
    shortDescription: 'on every medium coffee everyday',
  },
  {
    id: 2,
    title: 'UPTO 10% OFF ',
    shortDescription: ' on every medium coffee on tuesday',
  },
  {
    id: 3,
    title: 'UPTO 20% OFF',
    shortDescription: 'on every large coffee',
  },
];

function BusinessExploreOffers(_props) {
  return (
    <>
      <View style={style.headingContainer}>
        <FormattedMessage
          {...messages.activateOfferLabel}
          style={style.activeHeading}
        />
        <FormattedMessage
          {...messages.deactivateOfferLabel}
          style={style.deactiveHeading}
        />
      </View>
      <View style={style.list}>
        {data.map((item) => (
          <View key={item.id} style={style.itemWrapper}>
            <View style={style.logoWrapper}>
              <Image title="dealImage" style={style.logo} />
            </View>
            <View style={style.contentWrapper}>
              <Text style={style.title}>{item.title}</Text>
              <Text style={style.shortDescription}>
                {item.shortDescription}
              </Text>
            </View>
            <View style={style.editIconHolder}>
              <Icon name="edit" font="fidelight" style={style.editIcon} />
            </View>
          </View>
        ))}
      </View>
    </>
  );
}

export default React.memo(BusinessExploreOffers);
