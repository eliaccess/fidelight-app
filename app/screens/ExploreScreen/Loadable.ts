/**
 *
 * Asynchronously loads the component for ExploreScreen
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
