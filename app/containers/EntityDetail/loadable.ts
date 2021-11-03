/**
 *
 * Asynchronously loads the component for EntityDetail
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
