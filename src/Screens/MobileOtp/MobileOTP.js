import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateVerticalScale } from '../../styles/responsiveSize'
import api from '../../redux/actions';
import { showMessage } from 'react-native-flash-message'
import validator from '../../utils/validations';
import Loader from '../../Components/Loader';
import strings from '../../constants/lang';
import { connect } from 'react-redux';
// create a component
function MobileOTP(props) {
  const [state, setState] = useState({
    userEmail: "",
    password: "",
    phoneNumber: "",
    otp: "",
    userId: "",
    isLoading: false,
  })
  const updateState = data => setState(preState => ({ ...preState, ...data }));
  const onAddText = (key) => {

    return (value) => {
      updateState({ [key]: value });
    };
  }
  const isValidData = () => {
    const { phoneNumber} = state
    const error = validator({ phoneNumber: phoneNumber })
    if (error) {
      showMessage({
        type: "danger",
        icon: "danger",
        message: error
      })
      return false;
    }

    updateState({ isLoading: true })
    api.mobileOtpVerification({

      contactDetails:
      {
        phoneNo: phoneNumber,
        countryCode: "+91",
        countryCodeISO: "IN"
      }
    }
    )
      .then((res) => {
        updateState({ isLoading: false })
        props.navigation.navigate(navigationStrings.OTP_SCREEN,
          { userId: res.data.userId })
      })
      .catch((error) => {
        console.log(error)
      })
    return true;
  };
  const { isLoading } = state
  const { themeColor, themeColor2 } = props
  return (
    <View style={styles.container}>
      <View style={{...styles.navSignup}}>
        <Text style={{
          fontFamily: fontFamily.bold,
          fontSize: 20,
          color: colors.themeColor,
          fontWeight: 'bold',
          marginLeft: 6
        }}>{strings.LOGIN_VIA_OTP}</Text>
        <Image
          style={styles.arrowImage}
          source={imagePath.rightArrow}
        />
      </View>
      <ScrollView>
        <View style={{ paddingHorizontal: 15, marginTop: 25 }}>
          <TextInputWithLabel onChangeText={onAddText("phoneNumber")}
            label={strings.YOUR_PHONE_NUMBER2} color={colors.black}
            borderColor={themeColor} placeholder={strings.YOUR_PHONE_NUMBER} />
        </View>
        <View style={styles.buttonView}>
          <ButtonWithLoader btnText={strings.CONTINUE}
            btnTextStyle={20} btnStyle={styles.buttonStyle}
            bgColor={themeColor2} onPress={isValidData} />
        </View>
        <View style={styles.socialRow}>
          <View style={styles.hyphen} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.hyphen} />
        </View>
        <View style={{ flexDirection: "row" }}>
        </View>
        <View style={styles.socialIconView}>
          <TouchableOpacity>
            <View
              style={styles.iconView}
            >
              <Image
                style={styles.textFacebook}
                source={imagePath.facebookImage}
              />
              <Text>{strings.FACEBOOK}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={styles.iconView2}
            >
              <Image style={styles.textGoogle} source={imagePath.googleImage} />
              <Text >{strings.GOOGLE}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={{ ...styles.txtSmall1, color: colors.textGreyLight }}>
            {strings.NEW_TO_HEALTHKART}
            <Text
              onPress={() => props.navigation.navigate(navigationStrings.SIGNUP)}
              style={{
                color: themeColor,
                fontFamily: fontFamily.futuraBtHeavy,
              }}> {strings.SIGN_UP}</Text>
          </Text>
        </View>
      </ScrollView>
      <Loader isLoading={isLoading} />
    </View>
  );
}
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0
  },
  navSignup: {
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  arrowImage: {
    height: 15,
    width: 15,
    tintColor: colors.themeColor,
  },
  checkBoxView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  buttonView: {
    marginHorizontal: 15,
    height: 70,
    marginTop: -10
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
  socialIconView: { flexDirection: "row", marginVertical: 10, paddingHorizontal: 20, justifyContent: "space-between" },
  iconView: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 5,
    borderColor: colors.btnABlue,
    borderRadius: 5,
    marginRight: 20,
    width: 130,
    justifyContent: "center",
    alignItems: "center"
  },
  iconView2: {
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 16
  },
  checkBoxView: { justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 18 },
  buttonStyle: { borderWidth: 0 }
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
export default connect(mapStateToProps)(MobileOTP);
