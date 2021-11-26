/**
 *
 * Asynchronously loads the component for RecentWidget
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
