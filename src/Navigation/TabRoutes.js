import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Cart, HomePage, Profile, Search, MyDoctors, Consultations } from '../Screens/index';
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import { connect } from 'react-redux';
import strings from '../constants/lang';

const Tab = createBottomTabNavigator();

function TabRoutes(props) {
  const { themeColor, themeColor2 } = props
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: themeColor,
        activeBackgroundColor: themeColor2,
        inactiveBackgroundColor: colors.white,
        labelStyle: {
          fontWeight: "bold",
          textAlign: 'center',
        }
      }}>
      <Tab.Screen
        name={navigationStrings.HOMEPAGE}
        component={HomePage}
        options={{
          tabBarLabel: strings.HOMEPAGE,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ height: 25, width: 25, tintColor: focused ? colors.white : themeColor }}
                source={imagePath.home}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.DOCTORS}
        component={MyDoctors}
        options={{
          tabBarLabel: strings.DOCTORS,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ height: 25, width: 25, tintColor: focused ? colors.white : themeColor }}
                source={imagePath.doctor}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.LATEST_DEALS}
        component={Consultations}
        options={{
          tabBarLabel: strings.CONSULT,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ height: 25, width: 25, tintColor: focused ? colors.white : themeColor }}
                source={imagePath.chat}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name={navigationStrings.SEARCH}
        component={Search}
        options={{
          tabBarLabel: strings.SEARCH,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ height: 25, width: 25, tintColor: focused ? colors.white : themeColor }}
                source={imagePath.search}
              />
            );
          },
        }}
      />


      <Tab.Screen
        name={navigationStrings.CART}
        component={Cart}
        options={{
          tabBarLabel: strings.CART,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ height: 25, width: 25, tintColor: focused ? colors.white : themeColor }}
                source={imagePath.cart}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.POFILE}
        component={Profile}
        options={{
          tabBarLabel: strings.PROFILE,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ height: 22, width: 22, tintColor: focused ? colors.white : colors.themeColor }}
                source={imagePath.profile}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const mapStateToProps = state => {
  return (
    {
      themeColor: state.themeReducer.themeColor,
      themeColor2: state.themeReducer.themeColor2
    }
  )
}
export default connect(mapStateToProps)(TabRoutes);
