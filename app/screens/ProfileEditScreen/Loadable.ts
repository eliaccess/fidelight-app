/**
 *
 * Asynchronously loads the component for ProfileEditScreen
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
