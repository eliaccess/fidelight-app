/**
 *
 * Asynchronously loads the component for FavoriteEntities
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
