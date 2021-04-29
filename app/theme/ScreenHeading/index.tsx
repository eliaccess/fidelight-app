/**
 *
 * ScreenHeading
 *
 */
import React from 'react';
import { StyleSheet } from 'react-native';

import Dimensions from 'theme/Dimensions';
import Colors from 'theme/Colors';

import Text from 'theme/Text';

const style = StyleSheet.create({
  container: {},
  heading: {
    fontSize: 24,
    color: Colors.black,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 14,
    color: Colors.textGrey,
    marginTop: Dimensions.space1x,
  },
});

interface IScreenHeading {
  heading: string | React.ReactNode;
  subHeading?: string | React.ReactNode;
}

const ScreenHeading: React.FC<IScreenHeading> = ({ heading, subHeading }) => (
  <>
    <Text style={style.heading}>{heading}</Text>
    <Text style={style.subHeading}>{subHeading}</Text>
  </>
);

export default ScreenHeading;
