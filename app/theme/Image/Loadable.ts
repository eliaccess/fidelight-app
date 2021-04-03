/**
 *
 * Asynchronously loads the component for Image
 *
 */

import Loadable from 'react-suspense-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
