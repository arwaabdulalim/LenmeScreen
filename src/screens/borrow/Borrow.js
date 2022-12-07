import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';

const Borrow = () => {
  return (
    <View style={styles.mainView}>
      <Header />
      <Card />
    </View>
  );
};

export default Borrow;
