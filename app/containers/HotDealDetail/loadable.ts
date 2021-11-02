/**
 *
 * Asynchronously loads the component for HotDealDetail
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
