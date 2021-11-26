/**
 *
 * Asynchronously loads the component for RecentSelectedCities
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
