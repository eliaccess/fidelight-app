/**
 *
 * Asynchronously loads the component for EntitySearch
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
