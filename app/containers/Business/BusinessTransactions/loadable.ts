/**
 *
 * Asynchronously loads the component for BusinessTransactions
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
