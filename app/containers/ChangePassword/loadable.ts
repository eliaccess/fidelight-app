/**
 *
 * Asynchronously loads the component for ChangePassword
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
