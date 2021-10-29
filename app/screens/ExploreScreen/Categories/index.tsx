/*
 *
 * CategoriesWidget
 *
 */

import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Section from 'theme/Section';
import Text from 'theme/Text';
import HorizontalSlidingList from 'theme/HorizontalSlidingList';
import { buttonGradientProps } from 'theme/utils';
import TouchFeedback from 'theme/TouchFeedback';

import messages from './messages';

import { useGetStyles } from './style';

type CategoriesWidgetProps = {
  onPress: (...args: any) => void;
  activeCategoryId: number;
  data: {
    id: number;
    name: string;
    description: string;
    logoLink: string;
  }[];
};

function CategoriesWidget(props: CategoriesWidgetProps) {
  const style = useGetStyles();

  return (
    <Section
      heading={<FormattedMessage {...messages.categoriesHeading} isFragment />}
    >
      <HorizontalSlidingList>
        {props.data.map((item) => {
          const active = item.id === props.activeCategoryId;
          return (
            <TouchFeedback
              key={item.id}
              onPress={() => {
                props.onPress(item.id);
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
                <Image uri={item.logoLink} style={style.itemImage} />
              </View>
              <Text
                style={[style.itemTitle, active ? style.activeItem : null]}
                numberOfLines={1}
              >
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
