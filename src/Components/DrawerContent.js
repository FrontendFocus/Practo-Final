import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import navigationStrings from '../constants/navigationStrings';
import ButtonWithLoader from './ButtonWithLoader';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors'

function DrawerContent(props) {
  const onLogout = () => {
    actions.logout();
  };
  const { navigation, themeColor, themeColor2 } = props;
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={imagePath.profile}
                size={50}
                style={{backgroundColor: themeColor2}}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>Saloni Bhatia</Title>
                <Caption style={styles.caption}>View and edit profile</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              onPress={() => {
                navigation.navigate(navigationStrings.TAB_ROUTES);
              }}
            />

            <DrawerItem
              label="Charts"
              onPress={() => {
                navigation.navigate(navigationStrings.CHARTS);
              }}
            />
            <DrawerItem
              label="QRCodeScanner"
              onPress={() => {
                navigation.navigate(navigationStrings.NOTIFICATIONS);
              }}
            />
            <DrawerItem
              label="Consultations"
              onPress={() => {
                navigation.navigate(navigationStrings.ALL_USERS);
              }}
            />

            <DrawerItem label="Settings" />
            <DrawerItem label="Support" />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
        <ButtonWithLoader
          btnStyle={styles.buttonStyle}
          btnText="Logout"
          bgColor={themeColor2}
          btnTextStyle={20}
          onPress={() => onLogout()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: colors.themeColor2,
    fontWeight: 'bold'
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  buttonStyle: {
    borderWidth: 0,
  },
});

const mapStateToProps = state => {
  return {
    themeColor: state.themeReducer.themeColor,
    themeColor2: state.themeReducer.themeColor2,
  };
};

export default connect(mapStateToProps)(DrawerContent);
