/**
 *
 * InputDropDown
 *
 */
import React, { useState, useEffect } from 'react';

import TouchFeedback from 'theme/TouchFeedback';
import Text from 'theme/Text';
import Icon from 'theme/Icon';

import DropdownModal from './DropdownModal';

import style from './style';
import { DataProps } from './types';

type InputDropDownProps = {
  data?: DataProps[];
  label: any;
  onSelect: (...args: any[]) => any;
  onChangeState?: (...args: any[]) => any;
  disabled?: boolean;
  selectedValue?: any;
  selectionProperty?: string;
  title: string;
  limit?: number;
  error?: string | React.ReactNode;
  placeHolder?: string | React.ReactNode;
};

const InputDropDown: React.FC<InputDropDownProps> = ({
  onChangeState = () => {},
  limit = 1,
  ...props
}) => {
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    onChangeState(showList);
  }, [showList]);

  const onPress = () => {
    if (props.disabled) {
      return;
    }
    setShowList(!showList);
  };

  return (
    <>
      <Text animated style={[style.label]}>
        {props.label}
      </Text>
      <TouchFeedback
        onPress={onPress}
        style={style.container}
        testID="Chevron_Button"
      >
        {props.selectedValue ? (
          <Text animated style={style.selectedValue} numberOfLines={1}>
            {props.selectedValue}
          </Text>
        ) : (
          <>
            {props.placeHolder ? (
              <Text style={style.placeholder}>{props.placeHolder}</Text>
            ) : (
              <Text />
            )}
          </>
        )}
        <Icon
          name={showList ? 'chevron-up' : 'chevron-down'}
          style={style.dropDownIcon}
        />
      </TouchFeedback>
      {props.error ? <Text style={style.error}>{props.error}</Text> : null}
      {showList && props.data && props.data.length > 0 ? (
        <>
          <DropdownModal
            testID="DropdownModal"
            onRequestClose={() => setShowList(false)}
            selectedValue={props.selectedValue}
            data={props.data}
            onSelect={props.onSelect}
            selectionProperty={props.selectionProperty}
            title={props.title}
          />
        </>
      ) : null}
    </>
  );
};
export default InputDropDown;
