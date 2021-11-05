/**
 *
 * Asynchronously loads the component for UserLocation
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
