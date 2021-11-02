/**
 *
 * FavoriteEntitiesLoader
 *
 */
import React from 'react';

import EntityCardLoader from 'components/EntityCard/Loader';

interface FavoriteEntitiesLoaderProps {
  numberOfItems: number;
}

const FavoriteEntitiesLoader: React.FC<FavoriteEntitiesLoaderProps> = ({
  numberOfItems,
}) => (
  <>
    {Array.from(Array(numberOfItems), (_a, i) => (
      <EntityCardLoader />
    ))}
  </>
);

export default FavoriteEntitiesLoader;
