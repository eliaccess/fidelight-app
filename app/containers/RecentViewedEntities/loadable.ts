/**
 *
 * Asynchronously loads the component for RecentViewedEntities
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
