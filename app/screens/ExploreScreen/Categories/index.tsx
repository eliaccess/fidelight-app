/*
 *
 * CategoriesWidget
 *
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import FormattedMessage from 'theme/FormattedMessage';
import Icon from 'theme/Icon';
import Section from 'theme/Section';
import Text from 'theme/Text';
import HorizontalSlidingList from 'theme/HorizontalSlidingList';
import { buttonGradientProps } from 'theme/utils';
import TouchFeedback from 'theme/TouchFeedback';

import messages from './messages';
import style from './style';
import Categories from './data';

function CategoriesWidget(props) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  return (
    <Section
      heading={<FormattedMessage {...messages.categoriesHeading} isFragment />}
    >
      <HorizontalSlidingList>
        {Categories.map((item, index) => {
          const active = index === activeCategoryIndex;
          return (
            <TouchFeedback
              key={item.id}
              onPress={() => {
                setActiveCategoryIndex(index);
                // @ts-ignore
                props.onPress();
              }}
              style={style.item}
            >
              {active ? (
                <LinearGradient
                  {...buttonGradientProps()}
                  style={style.backdrop}
                />
              ) : null}
              <View style={style.itemIconHolder}>
                {active ? (
                  <LinearGradient
                    {...buttonGradientProps()}
                    style={style.backdrop}
                  />
                ) : null}

                <Icon
                  font={item?.font ? 'feather' : 'fidelight'}
                  name={item.icon}
                  style={[style.itemIcon, active ? style.activeItem : null]}
                />
              </View>
              <Text style={[style.itemName, active ? style.activeItem : null]}>
                {item.name}
              </Text>
            </TouchFeedback>
          );
        })}
      </HorizontalSlidingList>
    </Section>
  );
}

export default React.memo(CategoriesWidget);
