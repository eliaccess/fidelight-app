/**
 *
 * Asynchronously loads the component for HotDeals
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
