import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import AuthStack from '../Navigation/AuthStack';
import { connect } from 'react-redux'
import MainStack from './MainStack';
import { navigationRef } from './NavigationService';
const Stack = createStackNavigator();

function Routes(props) {
  const { userData } = props
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {!!userData.accessToken ? MainStack() : AuthStack()}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const mapStateToProps = state => {

  return (
    {
      userData: state.auth.userData
    }
  )
}
export default connect(mapStateToProps)(Routes)