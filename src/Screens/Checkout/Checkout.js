import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import commonStyles from '../../styles/commonStyles';
import styles from './styles';
export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
        },
      ],
    };
  }
  renderItem = () => {
    return (
      <View>
        <View style={styles.cardView}>
          <TouchableOpacity>
            <View
              style={styles.subCardview}>
              <View style={styles.imageView}>
                <View
                  style={styles.cardTextView}>
                  <View>
                    <View style={styles.subCardview1}>
                      <Text style={styles.fullNameInCard}>
                        0008415
                  </Text>
                      <Text style={styles.fullNameInCard1}>
                        Date
                  </Text>
                    </View>
                    <View style={styles.cardMailView}>
                      <Text numberOfLines={1} style={{ color: colors.themeColor }}>
                        Payment Status: Non 3-D Secure
                    </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.itemsText}>Items:</Text>
        <View style={styles.cardView}>
          <TouchableOpacity>
            <View
              style={styles.subCardview}>
              <View style={styles.imageView}>
                <View
                  style={styles.cardTextView}>
                  <View>
                    <View style={styles.subCardview1}>
                      <Text style={styles.cardMailView}>
                        I m uploading this purely for the lulz.I think someone gave.
                </Text>
                    </View>
                    <View style={styles.cardMailView}>
                      <Text numberOfLines={1} style={{ color: colors.themeColor }}>
                        Qty: 4
                  </Text>
                      <View style={styles.subCardview1}>
                        <Text numberOfLines={1} style={{ color: colors.themeColor }}>
                          Code: FRT85G7H8
                  </Text>
                        <Image source={imagePath.shoppingBag} style={styles.searchIcon} />
                      </View>
                      <View style={styles.subCardview1}>
                        <Text numberOfLines={1} style={{ color: colors.themeColor, marginLeft: ('14%') }}>
                          VJVHGF657
                  </Text>
                        <Image source={imagePath.shoppingBag} style={styles.searchIcon} />
                      </View>
                      <View style={styles.subCardview1}>
                        <Text numberOfLines={1} style={{ color: colors.themeColor, marginLeft: ('14%') }}>
                          MJU7430F5
                  </Text>
                        <Image source={imagePath.shoppingBag} style={styles.searchIcon} />
                      </View>
                      <View style={styles.subCardview1}>
                        <Text numberOfLines={1} style={{ color: colors.themeColor, marginLeft: ('14%') }}>
                          GHT68GR4R
                  </Text>
                        <Image source={imagePath.shoppingBag} style={styles.searchIcon} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={styles.subCardview}>
              <View
                style={styles.cardTextView}>
                <View>
                  <View style={styles.subCardview1}>
                    <Text style={styles.cardMailView}>
                      I m uploading this purely for the lulz.I think
                </Text>
                  </View>
                  <View style={styles.cardMailView}>
                    <Text numberOfLines={1} style={{ color: colors.themeColor }}>
                      Qty: 4
                  </Text>
                    <View style={styles.subCardview1}>
                      <Text numberOfLines={1} style={{ color: colors.themeColor }}>
                        Code: HYU7H8H9H
                  </Text>
                      <Image source={imagePath.shoppingBag} style={styles.searchIcon} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View><Text></Text></View>
        </View>
      </View>
    );
  };
  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.categoriesTextView}>
            <TouchableOpacity>
              <Text style={{ ...commonStyles.mediumFont20, color: colors.black }}>
                View Code
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={data}
          renderItem={item => this.renderItem(item)}
        />
      </View>
    );
  }
}

