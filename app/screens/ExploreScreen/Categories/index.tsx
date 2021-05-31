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
import Icon from 'theme/Icon';
import Section from 'theme/Section';
import Text from 'theme/Text';
import HorizontalSlidingList from 'theme/HorizontalSlidingList';
import { buttonGradientProps } from 'theme/utils';
import TouchFeedback from 'theme/TouchFeedback';
import useStateHandler from 'hooks/useStateHandler';

import messages from './messages';
import style from './style';
import Categories from './data';
import CategoriesWidgetLoader from './Loader';

function CategoriesWidget(_props) {
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
        {Categories.map((item, index) => {
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
