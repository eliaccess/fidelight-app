/**
 *
 * Asynchronously loads the component for BusinessAuthentication
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
