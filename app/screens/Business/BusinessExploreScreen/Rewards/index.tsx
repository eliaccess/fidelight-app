/*
 *
 * BusinessExploreRewards
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
    title: 'Free small coffee on 12 points',
    shortDescription:
      'User need to  asdasd asdascollect 12 Point to avail this offer ',
  },
  {
    id: 2,
    title: 'Free pizza',
    shortDescription: 'User need to collect 12 Point to avail this offer ',
  },
];

function BusinessExploreRewards(props) {
  return (
    <>
      <View style={style.headingContainer}>
        <FormattedMessage
          {...messages.activateRewardLabel}
          style={style.activeHeading}
        />
        <FormattedMessage
          {...messages.deactivateRewardLabel}
          style={style.deactiveHeading}
        />
      </View>
      <View style={style.list}>
        {data.map((item) => (
          <View key={item.id} style={style.itemWrapper}>
            <View style={style.logoWrapper}>
              <Image title="badge" style={style.logo} />
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

export default React.memo(BusinessExploreRewards);
