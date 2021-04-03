/**
 *
 * FormattedNumber
 *
 */
import React from 'react';
import { useIntl } from 'react-intl';
import Text, { TextProps } from 'theme/Text';

interface DateProps extends TextProps {
  value: number;
}
export function useFormattedNumber(value: number): string {
  const intl = useIntl();
  return intl.formatNumber(value);
}

function FormattedNumber({ value, ...otherProps }: DateProps) {
  const content = useFormattedNumber(value);
  return <Text {...otherProps}>{content}</Text>;
}

export default FormattedNumber;
