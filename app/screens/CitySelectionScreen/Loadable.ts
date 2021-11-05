/**
 *
 * Asynchronously loads the component for CitySelectionScreen
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
