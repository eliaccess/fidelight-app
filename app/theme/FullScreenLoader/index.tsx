/**
 *
 * FullScreenLoader
 *
 */
import React from 'react';
import { View } from 'react-native';
import Loader from 'theme/Loader';
import style from './style';

const FullScreenLoader: React.FC<{}> = () => (
  <View style={style.container}>
    <Loader />
  </View>
);

export default FullScreenLoader;
