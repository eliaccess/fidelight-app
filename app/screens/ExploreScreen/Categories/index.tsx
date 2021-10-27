/*
 *
 * CategoriesWidget
 *
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useCompanyTypes } from 'containers/CompanyTypes';

import FormattedMessage from 'theme/FormattedMessage';
import Image from 'theme/Image';
import Section from 'theme/Section';
import Text from 'theme/Text';
import HorizontalSlidingList from 'theme/HorizontalSlidingList';
import { buttonGradientProps } from 'theme/utils';
import TouchFeedback from 'theme/TouchFeedback';
import useStateHandler from 'hooks/useStateHandler';

import messages from './messages';

import CategoriesWidgetLoader from './Loader';
import { useGetStyles } from './style';

function CategoriesWidget(_props) {
  const style = useGetStyles();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const categories = useCompanyTypes();

  const showContent = useStateHandler({
    state: categories,
  });

  if (!showContent) {
    return (
      <CategoriesWidgetLoader
        heading={
          <FormattedMessage {...messages.categoriesHeading} isFragment />
        }
        numberOfItems={6}
      />
    );
  }

  if (!categories.data) {
    return null;
  }

  return (
    <Section
      heading={<FormattedMessage {...messages.categoriesHeading} isFragment />}
    >
      <HorizontalSlidingList>
        {categories.data.map((item, index) => {
          const active = index === activeCategoryIndex;
          return (
            <TouchFeedback
              key={item.id}
              onPress={() => {
                setActiveCategoryIndex(index);
                // @ts-ignore
                // props.onPress();
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
