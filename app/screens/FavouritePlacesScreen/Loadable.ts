/**
 *
 * Asynchronously loads the component for FavouritePlacesScreen
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
