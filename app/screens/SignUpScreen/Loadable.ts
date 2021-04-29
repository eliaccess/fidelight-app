/**
 *
 * Asynchronously loads the component for SignUpScreen
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
