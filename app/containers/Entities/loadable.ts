/**
 *
 * Asynchronously loads the component for Entities
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
