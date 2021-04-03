/**
 *
 * FormattedDate
 *
 */
import React from 'react';
import { FormatDateOptions, useIntl } from 'react-intl';
import Text, { TextProps } from 'theme/Text';

interface DateProps extends TextProps {
  date?: any;
  format?: object;
}
export function useFormattedDate(
  date: string,
  opts?: FormatDateOptions,
): string {
  const intl = useIntl();
  return intl.formatDate(date, opts);
}

function FormattedDate({
  date = new Date(),
  format = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    formatMatcher: 'basic',
  },
  ...otherProps
}: DateProps) {
  const content = useFormattedDate(date, format);
  return <Text {...otherProps}>{content}</Text>;
}

export default FormattedDate;
