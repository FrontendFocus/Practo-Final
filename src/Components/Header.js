import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { connect } from 'react-redux';
import {
  TouchableOpacity,
} from 'react-native-gesture-handler';
function Header({ menuPress, newColor, cartPress }) {
  return (
    <View style={styles.navbar}>
      <View style={styles.navbarView}>
        <View style={styles.imageView}>
          <TouchableOpacity onPress={menuPress}>
            <Image
              style={{ height: 20, width: 30, tintColor: newColor }}
              source={imagePath.menu}
            />
          </TouchableOpacity>
          <Image style={{ height: 50, width: 100, marginLeft: 5 }} source={imagePath.logo1}></Image>
        </View>
        <TouchableOpacity
          onPress={cartPress}>
          <Image style={styles.cartImage} source={imagePath.cart} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
// export default Header;
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: colors.white,
    height: 50,
  },
  navbarView: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartImage: { height: 27, width: 27, marginHorizontal: 10 },
});

const mapStateToProps = state => {
  return {
    themeColor: state.themeReducer.themeColor,
  };
};

export default connect(mapStateToProps)(Header);
