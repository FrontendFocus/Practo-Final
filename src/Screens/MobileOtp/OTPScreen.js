//import liraries
import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import StatusBar from '../../Components/StatusBar';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import OTPTextView from 'react-native-otp-textinput';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateVerticalScale,
} from '../../styles/responsiveSize';
import api from '../../redux/actions';
import { showMessage } from 'react-native-flash-message';
import strings from '../../constants/lang';
import { connect } from 'react-redux';
// create a component
function OTPScreen(props) {
  const [state, setState] = useState({
    otp: '',
  });
  const updateState = data => setState(preState => ({ ...preState, ...data }));
  const onAddText = (key) => {
    return value => {
      updateState({ [key]: value });
    };
  }

  const isValidOtp = () => {
    const { otp } = state;
    api
      .otpVerification({
        userId: props.route.params.userId,
        otp,
        deviceToken: '123',
        registerFrom: Platform.OS.toUpperCase(),
      })
      .then(res => {
        console.log(res, 'login otp');
        showMessage({
          message: 'OTP Verified ',
          type: 'success',
        });
        props.navigation.navigate(navigationStrings.TAB_ROUTES);
      })
      .catch(error => {
        console.log(error);
          showMessage({
            type: 'danger',
            message: 'Login failed ',
          });
      });
    return true;
  };
  const { themeColor, themeColor2 } = props
  return (

    <View style={styles.container}>
      <StatusBar bgColor={themeColor} />
      <View style={styles.navSignup}>
        <Text style={{
          fontFamily: fontFamily.bold,
          fontSize: 20, color: themeColor
        }}>{strings.OTP_VERIFICATION}</Text>
        <Image style={styles.arrowImage} source={imagePath.crossImage} />
      </View>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 15,
            marginTop: 15,
            position: 'relative',
          }}>
          {/* <TextInputWithLabel
            onChangeText={onAddText('otp')}
            label={strings.ENTER_OTP}
            placeholder="Enter OTP."
            color={themeColor}
            borderColor={themeColor}
          /> */}
          <OTPTextView
              containerStyle={styles.textInputContainer}
              textInputStyle={[styles.roundedTextInput, {borderRadius: 100}]}
              handleTextChange={text => setState({otp: text})}
              inputCount={5}
              keyboardType="numeric"
            />
        </View>

        <View style={styles.buttonView}>
          <ButtonWithLoader
            btnText={strings.LOGIN}
            btnTextStyle={20}
            onPress={isValidOtp}
            bgColor={themeColor2}
            btnStyle={styles.buttonStyle}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={{ ...styles.txtSmall1, color: colors.textGreyLight }}>
            {strings.DIDNT_GET_OTP}
            <Text
              onPress={() =>
                props.navigation.navigate(navigationStrings.LOGIN)
              }
              style={{
                color: themeColor,
                fontFamily: fontFamily.futuraBtHeavy}}> {strings.RESEND_CODE}</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navSignup: {
    backgroundColor: colors.white,
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrowImage: {
    height: 20,
    width: 20,
    tintColor: colors.black,
  },
  checkBoxView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  buttonView: {
    marginHorizontal: 15,
    height: 70,
    marginTop: -10,
    // borderBottomWidth:2
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hyphen: {
    width: 130,
    height: 1,
    backgroundColor: colors.textGrey,
    opacity: 0.6,
  },
  orText: {
    ...commonStyles.mediumFont14,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: fontFamily.medium,
    opacity: 0.6,
    marginTop: 0,
    marginHorizontal: moderateScale(16),
  },
  socialRowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateVerticalScale(40),
  },
  socialIconView: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  iconView: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 5,
    borderColor: colors.btnABlue,
    borderRadius: 5,
    marginRight: 20,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView2: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.orange,
    borderRadius: 5,
    width: 130,
    padding: 5,
  },
  textFacebook: { height: 30, width: 30, marginRight: 3 },
  textGoogle: { height: 30, width: 30, marginRight: 10 },
  bottomContainer: {
    marginBottom: moderateVerticalScale(30),
  },
  txtSmall: {
    ...commonStyles.mediumFont14,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: fontFamily.medium,
    marginTop: moderateVerticalScale(15),
  },
  buttonBottom: {
    marginTop: -13,
    marginBottom: moderateVerticalScale(30),
  },
  txtSmall1: {
    ...commonStyles.mediumFont14,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: fontFamily.medium,
    marginTop: moderateVerticalScale(15),
    fontSize: 16,
  },
  checkBoxView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 18,
  },
  buttonStyle: { borderWidth: 0 },
  textInputContainer: {
    marginBottom: 20,  
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor:colors.themeColor
  },
});

const mapStateToProps = state => {
  return (
    {
      themeColor: state.themeReducer.themeColor,
      themeColor2: state.themeReducer.themeColor2
    }
  )
}
//make this component available to the app
export default connect(mapStateToProps)(OTPScreen);
