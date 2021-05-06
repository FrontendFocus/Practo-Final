import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import Loader from './Loader';

function CustomButton(props) {
  const {themeColor="", onButtonCLick=()=>{}, isvalid=""} = props;
  return(
  <View>
    <TouchableOpacity
      style={{...styles.buttonTouch,backgroundColor: !!themeColor ? themeColor : colors.themeColor2,}}
      onPress={() => onButtonCLick()}>
      {isvalid ?   <Loader isvalid={true} />    :<Text style={styles.sendOTPText}>SCAN QR Code</Text>}
    </TouchableOpacity>
  </View>
  )
}
const mapStateToProps = state => {
  return {
    themeColor: state.themeReducer.themeColor,
  };
};

export default connect(mapStateToProps)(CustomButton);
const styles = StyleSheet.create({
  sendOTPText: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 12,
    fontFamily:fontFamily.se
  },
  buttonTouch:{
    
    height: 50,
    marginHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  }

});
