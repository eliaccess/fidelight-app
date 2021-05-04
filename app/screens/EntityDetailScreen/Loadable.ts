/**
 *
 * Asynchronously loads the component for EntityDetailScreen
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
