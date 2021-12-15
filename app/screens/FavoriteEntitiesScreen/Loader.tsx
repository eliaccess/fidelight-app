/**
 *
 * FavoriteEntitiesScreenLoader
 *
 */

import React from 'react';

import EntityCardLoader from 'components/EntityCard/Loader';

interface FavoriteEntitiesScreenLoaderProps {
  numberOfItems: number;
}

const FavoriteEntitiesScreenLoader: React.FC<FavoriteEntitiesScreenLoaderProps> =
  ({ numberOfItems }) => (
    <>
      {Array.from(Array(numberOfItems), (_a) => (
        <EntityCardLoader />
      ))}
    </>
  );

export default FavoriteEntitiesScreenLoader;
