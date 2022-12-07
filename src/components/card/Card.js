import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import CryptoToggle from '../cryptoToggle/CryptoToggle';
import CoinSlider from '../coinSlider/CoinSlider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/themes/colors';

const Card = () => {
  return (
    <View style={styles.cardWrapper}>
      <Text style={styles.cardTitle}>How much would you like to borrow?</Text>
      <CryptoToggle />
      <CoinSlider />
      <View style={styles.totalWrapper}>
        <Text style={styles.amountTxt}>100$</Text>
        <View style={styles.maxAmountView}>
          <TouchableOpacity>
            <Text style={styles.maxTxt}>Max </Text>
          </TouchableOpacity>
          <Text style={styles.maxTotal}> $200</Text>
        </View>
      </View>
      <View style={styles.minMaxAmounts}>
        <Text style={styles.maxMinTxt}>$50</Text>
        <Text style={styles.maxMinTxt}>$200</Text>
      </View>
      <View style={styles.totalFeesView}>
        <Text style={styles.totalAmountTxt}>Total amount with applicable </Text>
        <TouchableOpacity>
          <Text style={styles.maxTxt}>fees</Text>
        </TouchableOpacity>
        <Text style={styles.totalTxt}>$8,800.00</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.forwardIcon}>
          <MaterialCommunityIcons
            name="arrow-right"
            size={30}
            color={colors.white}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
