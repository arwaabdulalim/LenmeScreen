import {View, Text, Image, Switch} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import colors from '../../config/themes/colors';

const CryptoToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.toggleView}>
      <View style={styles.toggleWrapper}>
        <View style={styles.titleWrapper}>
          <Image
            source={require('../../assets/imgs/bitcoin.png')}
            style={styles.bitIcon}
          />
          <Text style={styles.titleTxt}>Do you own crypto?</Text>
        </View>
        <Switch
          trackColor={{false: colors.light, true: colors.primary}}
          thumbColor={isEnabled ? colors.white : colors.whisper}
          ios_backgroundColor={colors.light}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{
            transform: [{scaleX: 0.7}, {scaleY: 0.7}],
            position: 'absolute',
            top: 13,
            right: 5,
          }}
        />
      </View>
      <Text style={styles.detailsTxt}>Increase your limit up to $10,000</Text>
    </View>
  );
};

export default CryptoToggle;
