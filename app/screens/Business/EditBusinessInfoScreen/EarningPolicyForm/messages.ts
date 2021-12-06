/*
 * EarningPolicyForm Messages
 *
 * This contains all the text for the EarningPolicyForm component.
 */

import { defineMessages } from 'react-intl';

export const scope =
  'app.screens.Business.EditBusinessInfoScreen.EarningPolicyForm';

export default defineMessages({
  rewardPointsLabel: {
    id: `${scope}.rewardPointsLabel`,
    defaultMessage: 'Points user earns for every (eg.$10) spent',
  },
  submitLabel: {
    id: `${scope}.submitLabel`,
    defaultMessage: 'Save Policy',
  },
});
