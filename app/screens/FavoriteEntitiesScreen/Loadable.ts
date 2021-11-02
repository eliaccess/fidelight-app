/**
 *
 * Asynchronously loads the component for FavoriteEntitiesScreen
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
