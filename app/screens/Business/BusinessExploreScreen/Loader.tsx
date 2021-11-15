/**
 *
 * BusinessOffersRewardsLoader
 *
 */
import React from 'react';

import EntityCardLoader from 'components/EntityCard/Loader';

interface BusinessOffersRewardsLoaderProps {
  numberOfItems: number;
}

const BusinessOffersRewardsLoader: React.FC<BusinessOffersRewardsLoaderProps> =
  ({ numberOfItems }) => (
    <>
      {Array.from(Array(numberOfItems), (_a, i) => (
        <EntityCardLoader />
      ))}
    </>
  );

export default BusinessOffersRewardsLoader;
