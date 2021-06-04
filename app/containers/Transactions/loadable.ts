/**
 *
 * Asynchronously loads the component for Transactions
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
