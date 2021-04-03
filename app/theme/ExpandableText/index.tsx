import React, { useState } from 'react';

import Text, { TextProps } from 'theme/Text';
import FormattedMessage from 'theme/FormattedMessage';

import style from './style';
import messages from './messages';

interface ExpandableTextProps extends TextProps {
  showFull?: boolean;
  value: string;
  threshold?: number;
  numberOfLines?: number;
}
const defaultNumberOfLines = 4;

const ExpandableText: React.FC<ExpandableTextProps> = ({
  showFull = false,
  value,
  threshold = 30,
  ...props
}) => {
  const enabled = threshold && value.length > threshold;
  const [full, setFull] = useState(props.showFull);

  let text = value;
  if (enabled && !full) {
    text = `${text.substr(0, threshold)}...`;
  }

  return (
    <Text
      {...props}
      numberOfLines={full ? 1000 : defaultNumberOfLines}
      onPress={() => (enabled ? setFull(!full) : {})}
    >
      {text}
      {enabled ? (
        <>
          {full ? (
            <FormattedMessage {...messages.less} style={style.msg} />
          ) : (
            <FormattedMessage {...messages.more} style={style.msg} />
          )}
        </>
      ) : null}
    </Text>
  );
};

export default ExpandableText;
