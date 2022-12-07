import {StyleSheet} from 'react-native';
import colors from '../../config/themes/colors';

const styles = StyleSheet.create({
  toggleView: {
    width: 295,
    height: 56,
    backgroundColor: colors.ghost,
    borderRadius: 10,
    marginTop: 10,
  },
  toggleWrapper: {
    flexDirection: 'row',
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 13,
    marginTop: 11,
  },
  titleTxt: {
    color: colors.ink,
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
  },
  bitIcon: {
    height: 16,
    width: 16,
    marginRight: 7,
  },
  detailsTxt: {
    color: colors.gray,
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Poppins',
    marginLeft: 13,
  },
});

export default styles;
