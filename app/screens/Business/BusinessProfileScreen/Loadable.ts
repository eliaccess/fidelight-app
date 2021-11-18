/**
 *
 * Asynchronously loads the component for BusinessProfileScreen
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
