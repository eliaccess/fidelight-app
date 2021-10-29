/*
 *
 * Search
 *
 */

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import useStateHandler from 'hooks/useStateHandler';
import { useCategories } from 'containers/Categories';
import FormattedMessage from 'theme/FormattedMessage';

import CategoriesWidget from './Categories';
import HottestDealsWidget from './HottestDeals';
import RestaurantsList from './RestaurantsList';
import { ExploreScreenProps } from './types';
import { useGetStyles } from './style';
import CategoriesWidgetLoader from './Categories/Loader';
import messages from './messages';

function ExploreScreen(_props: ExploreScreenProps) {
  const style = useGetStyles();
  const [activeCategoryId, setActiveCategoryId] = useState(0);
  const categories = useCategories();

  useEffect(() => {
    if (categories?.data && categories.data.length > 0) {
      setActiveCategoryId(categories.data[0].id);
    }
  }, [categories.data]);

  const showContent = useStateHandler({
    state: categories,
  });

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainerStyle}
      >
        {showContent ? (
          <>
            <View style={style.categoriesSectionWrapper}>
              <CategoriesWidget
                data={categories.data || []}
                activeCategoryId={activeCategoryId}
                onPress={(id) => setActiveCategoryId(id)}
              />
            </View>
            <HottestDealsWidget />
            <RestaurantsList />
          </>
        ) : (
          <CategoriesWidgetLoader
            heading={
              <FormattedMessage {...messages.categoriesHeading} isFragment />
            }
            numberOfItems={6}
          />
        )}
      </ScrollView>
    </>
  );
}

export default React.memo(ExploreScreen);
