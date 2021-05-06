import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import {
  ScrollView,
} from 'react-native-gesture-handler';
import HomeStyle from '../../Components/HomeStyle';
import imagePath from '../../constants/imagePath';
import store from '../../redux/store';
import StatusBar from '../../Components/StatusBar';
import actions from '../../redux/actions';
import Header from '../../Components/Header';
import SnapCarousel from '../../Components/SnapCarousel';
import { connect } from 'react-redux'
import SearchBar1 from '../../Components/SearchBar1';
import styles from '../HomePage/styles';
import socketServices from '../../utils/socketService';
const { dispatch } = store;
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      addCartArray: [],

      shoeList: [
        {
          id: 1,
          name: "Blood Sugar",
          caption: '10% Health Cashback* T&C',
          image: imagePath.item1,
          originalPrice: 500,
          reducedPrice: 270,
          discount: 68,
          quantity: 1,
        },

        {
          id: 2,
          name: "Lipid Profile",
          caption: '10% Health Cashback* T&C',
          image: imagePath.item2,
          originalPrice: 1000,
          reducedPrice: 450,
          discount: 20,
          quantity: 1,
        },
        {
          id: 3,
          name: "Liver Profile",
          caption: '10% Health Cashback* T&C',
          image: imagePath.item3,
          originalPrice: 1000,
          reducedPrice: 560,
          discount: 18,
          quantity: 1,
        },
        {
          id: 4,
          name: "Thyroid Profile",
          caption: '10% Health Cashback* T&C',
          image: imagePath.item4,
          originalPrice: 700,
          reducedPrice: 350,
          discount: 68,
          quantity: 1,
        },
        {
          id: 5,
          name: "Pregnancy Test",
          caption: '10% Health Cashback* T&C',
          image: imagePath.item5,
          originalPrice: 1000,
          reducedPrice: 400,
          discount: 34,
          quantity: 1,
        },
        {
          id: 6,
          name: "Dengue NS1",
          caption: '10% Health Cashback* T&C',
          image: imagePath.item6,
          originalPrice: 1000,
          reducedPrice: 500,
          discount: 28,
          quantity: 1,
        },
      ],
    };
  }
  componentDidMount() {
    const { userData } = this.props
    socketServices.initializeSocket(userData.accessToken);
  }

  cartCounter = item => {
    let cart = this.props.cartList
    let itemNotadded = true;
    for (let i = 0; i < cart.length; i++)
      if (cart[i].id == item.id) {
        alert('already added');
        itemNotadded = false;
      }
    if (itemNotadded) {
      actions.addList(item)
      let cartArray = [...cart, item];
      this.setState({ cart: cartArray });
    }
  };


  onLogout = () => {
    actions.logout()

  }

  changeTheme = () => {
    const { themeColor } = this.state
    actions.switchTheme(themeColor)

  }
  openDrawer = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  }
  render() {
    const { shoeList, } = this.state;
    const { themeColor } = this.props
    return (
      <View style={styles.container}>
        <StatusBar bgColor={themeColor} />
        <Header menuPress={this.openDrawer} newColor={themeColor} />
        <View style={styles.searchBarView}>
          <SearchBar1 placeholder="Search for Products, Brands and More" />
        </View>
        <ScrollView>
          <SnapCarousel />

          <View>
            {<HomeStyle shoeList={shoeList} cartCounter={this.cartCounter} />}
          </View>
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            right: 11,
            top: 3,
            backgroundColor: themeColor,
            height: 17,
            width: 17,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
          }}>
          <Text style={styles.counterText}>{this.props.cartList.length}</Text>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return (
    {
      cartList: state.home.cartList,
      themeColor: state.themeReducer.themeColor,
      userData: state.auth.userData
    }
  )
}

export default connect(mapStateToProps)(HomePage)