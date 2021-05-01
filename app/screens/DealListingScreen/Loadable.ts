/**
 *
 * Asynchronously loads the component for DealListingScreen
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
