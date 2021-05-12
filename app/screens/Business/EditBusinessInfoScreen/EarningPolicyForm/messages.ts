/*
 * EarningPolicyForm Messages
 *
 * This contains all the text for the EarningPolicyForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.EditBusinessInfoScreen.EarningPolicyForm';

export default defineMessages({
  minimumAmountLabel: {
    id: `${scope}.minimumAmountLabel`,
    defaultMessage: 'Minimum amount need to spent (eg.$100)',
  },
  rewardsLabel: {
    id: `${scope}.rewardsLabel`,
    defaultMessage: 'Reward user get (eg.$5)',
  },
  spentTypeLabel: {
    id: `${scope}.spentTypeLabel`,
    defaultMessage: 'Spent',
  },
  pointBaseTypeLabel: {
    id: `${scope}.pointBaseTypeLabel`,
    defaultMessage: 'Point Base',
  },
});
