/**
 *
 * Asynchronously loads the component for QRCodeScreen
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));