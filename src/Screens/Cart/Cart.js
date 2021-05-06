import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import imagePath from '../../constants/imagePath';
import actions from '../../redux/actions';
import store from '../../redux/store';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';
import commonStyles from '../../styles/commonStyles';

const { dispatch } = store;
class Cart extends Component {
  constructor(props) {
    super(props);
  }
  increment = id => {
    actions.increment(id);
  };

  decrement = id => {
    actions.decrement(id);
  };

  delete = id => {
    actions.deleteList(id);
  };

  _renderItem = item => {
    const { cartList } = this.props;
    const {
      name,
      image,
      originalPrice,
      reducedPrice,
      discount,
      quantity,
      caption,
    } = item.item;
    const { themeColor } = this.props
    return (
      <View style={styles.addCartViewMain}>
        <View style={styles.addToCartView}>
          <View style={styles.cartView}>
            <View style={styles.imageView}>
              <Image style={styles.cartImage} source={image} />
            </View>
            <View style={styles.textView}>
              <Text style={styles.productName}>{name}</Text>
              <View style={styles.priceView}>
                <Text style={styles.productReducedPrice}>
                  Rs.{reducedPrice}
                </Text>
                <Text style={styles.productOriginalPrice}>
                  Rs.{originalPrice}
                </Text>

                <Text style={{
                  fontSize: 12,
                  color: colors.green1,
                  marginLeft: 5, fontWeight: 'bold'
                }}>
                  ({discount}%OFF)</Text>
              </View>
              <Text style={styles.productCaption}>+ {caption}</Text>
              <View style={styles.sizeQuantityView}>
                <View style={styles.quantityView}>
                  <TouchableOpacity
                    onPress={() => this.decrement(item.item.id)}>
                    <View style={styles.decrementView}>
                      <Image
                        style={styles.decrementImage}
                        source={{
                          uri:
                            'https://cdn.iconscout.com/icon/free/png-256/minus-146-475070.png',
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}> {quantity} </Text>

                  <TouchableOpacity
                    onPress={() => this.increment(item.item.id)}>
                    <View style={styles.decrementView}>
                      <Image
                        style={styles.decrementImage}
                        source={imagePath.plus}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const { cartList, price, } = this.props;
    const { themeColor } = this.props
    console.log(this.props.price, 'totalPrice');
    return (
      <View style={styles.container}>
        <View style={{ ...styles.navSignup, backgroundColor: colors.themeColor }}>

          <Text style={{
            fontFamily: fontFamily.bold,
            ...commonStyles.mediumFont20,
            color: colors.white, fontWeight: 'bold', marginLeft: 140,
          }}>My Cart</Text>
          <Image style={styles.arrowImage} source={imagePath.crossImage} />
        </View>

        <View>
          <View style={styles.totalPriceView}>
            <Text style={styles.totalPriceText}>
              {strings.TOTAL_PRICE}: {price}
            </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate(navigationStrings.CHECKOUT)}>
              <Text style={{
                color: colors.white,
                marginRight: 10,
                padding: 5,
                borderRadius: 5,
                backgroundColor: colors.themeColor2
              }} >{strings.PLACE_ORDERS}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={cartList}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartList: state.home.cartList,
    price: state.home.price,
    themeColor: state.themeReducer.themeColor,
  };
};

export default connect(mapStateToProps)(Cart);
