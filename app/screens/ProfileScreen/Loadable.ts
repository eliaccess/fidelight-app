/**
 *
 * Asynchronously loads the component for ProfileScreen
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
