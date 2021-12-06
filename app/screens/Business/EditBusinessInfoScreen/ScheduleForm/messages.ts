/*
 * ScheduleForm Messages
 *
 * This contains all the text for the ScheduleForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.Business.EditBusinessInfoScreen.ScheduleForm';

export default defineMessages({
  addTimings: {
    id: `${scope}.addTimings`,
    defaultMessage: 'Add Timings',
  },
  submitLabel: {
    id: `${scope}.submitLabel`,
    defaultMessage: 'Submit',
  },
  saveAvailabilityLabel: {
    id: `${scope}.saveAvailabilityLabel`,
    defaultMessage: 'Save Availability',
  },
});
