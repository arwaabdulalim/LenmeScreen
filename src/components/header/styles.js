import {StyleSheet, Platform} from 'react-native';
import colors from '../../config/themes/colors';

const styles = StyleSheet.create({
  headerView: {
    width: 395,
    height: 285,
    backgroundColor: colors.primary,
    marginTop: Platform.OS === 'ios' ? 15 : 10,
  },
  headerBar: {
    marginTop: 55,
    marginBottom: Platform.OS === 'ios' ? 31 : 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  img: {
    height: 30,
    width: 30,
  },
  headerTxt: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Poppins',
  },
  userNameWrapper: {
    marginHorizontal: 32,
  },
  userName: {
    color: colors.white,
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default styles;
