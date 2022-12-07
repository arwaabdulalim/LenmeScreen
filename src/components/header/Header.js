import {View, Text, Image} from 'react-native';
import React from 'react';

import styles from './styles';
const Header = () => {
  return (
    <View style={styles.headerView}>
      <View style={styles.headerBar}>
        <Image
          source={require('../../assets/imgs/icon.png')}
          style={styles.img}
        />

        <Text style={styles.headerTxt}>Borrow</Text>
        <Image
          source={require('../../assets/imgs/logo.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.userNameWrapper}>
        <Text style={styles.userName}>Hi Mark</Text>
      </View>
    </View>
  );
};

export default Header;
