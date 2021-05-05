/**
 *
 * Asynchronously loads the component for SupportScreen
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
