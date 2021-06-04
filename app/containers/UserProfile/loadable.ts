/**
 *
 * Asynchronously loads the component for UserProfile
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
