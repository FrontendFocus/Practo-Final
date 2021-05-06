import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
export default function ({
  onChangeText,
  value,
  onPress = () => {},
  placeholder,
}) {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchTextInpurt}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />

      <Image
        style={styles.searchIcon}
        source={{
          uri:
            'https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: colors.white,
    height: 40,
    justifyContent: 'center',
    position: 'relative',
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 10,
    fontFamily: fontFamily.futura,
  },

  searchIcon: {
    height: 20,
    width: 20,
    position: 'absolute',
    left: 10,
  },
  searchTextInpurt: {marginLeft: 35, fontSize: 15},
});
