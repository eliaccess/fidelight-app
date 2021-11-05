/**
 *
 * Asynchronously loads the component for CitiesSearch
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
