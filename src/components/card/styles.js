import {StyleSheet, Platform} from 'react-native';
import colors from '../../config/themes/colors';

const styles = StyleSheet.create({
  cardWrapper: {
    width: 335,
    height: 550,
    backgroundColor: colors.white,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    bottom: Platform.OS === 'ios' ? 100 : 150,
  },
  cardTitle: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    marginTop: 28,
  },
  totalWrapper: {
    top: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountTxt: {
    color: colors.black,
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    marginTop: 28,
  },
  maxAmountView: {flexDirection: 'row'},
  maxTxt: {
    textDecorationLine: 'underline',
    color: colors.primary,
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
  maxTotal: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Poppins',
    color: colors.medium,
  },
  minMaxAmounts: {
    flexDirection: 'row',
    width: '65%',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 80,
  },
  maxMinTxt: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Poppins',
    color: colors.medium,
    bottom: -110,
  },
  totalFeesView: {
    flexDirection: 'row',
    marginTop: 140,
  },
  totalAmountTxt: {
    color: colors.medium,
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
  totalTxt: {
    color: colors.medium,
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
  forwardIcon: {
    width: 44,
    height: 44,
    backgroundColor: colors.ink,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,
    left: 120,
  },
});
export default styles;
