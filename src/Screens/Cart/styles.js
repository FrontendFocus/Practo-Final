import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

export default StyleSheet.create({
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
    tintColor: colors.white,
  },
  totalPriceView: {
    height: 50,
    backgroundColor: colors.white,
    borderWidth: 1,
    justifyContent: 'space-between',
    borderColor: colors.lightGrey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalPriceText: {
    ...commonStyles.mediumFont16,

    fontWeight: 'bold', paddingLeft: 10
  },
  addCartViewMain: {
    marginHorizontal: 1,
    paddingHorizontal: 5, marginTop: 6
  },
  addToCartView: {
    borderWidth: 1,
    borderColor: colors.lightGrey,

    backgroundColor: colors.white,
    padding: -10,
  },
  cartView: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  imageView: {
    height: 135,
    width: 100, justifyContent: 'center'
  },
  cartImage: {
    height: 130,
    resizeMode: 'contain',
    width: '100%'
  },
  textView: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    marginTop:30
  },
  productName: {
    ...commonStyles.mediumFont16,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  productCaption: { ...commonStyles.mediumFont14, color: colors.green1 },
  priceView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3
  },
  productReducedPrice: {
    ...commonStyles.mediumFont14,
    fontWeight: "bold", color: colors.black
  },
  productOriginalPrice: {
    fontSize: 11,
    color: colors.grey,
    marginLeft: 7,
    textDecorationLine: "line-through",
  },
  sizeQuantityView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sizeText: {
    backgroundColor: colors.white,
    padding: 5, marginTop: 5, width: 70,
    fontSize:12
  },
  quantityView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 150,
    marginTop:-103
  },
  decrementView: {
    borderWidth: 1, height: 25,width:20,
    justifyContent: "center",
    borderColor:colors.themeColor2,
  },
  decrementImage: { height: 10, width: 10 ,tintColor:colors.themeColor2,marginLeft:4},
  quantityText: {
    borderTopWidth: 1,
    borderBottomWidth: 1, height: 25, paddingTop: 3,
    borderColor:colors.themeColor2,
    backgroundColor:colors.themeColor2,
    color:colors.white
  },
  buttonsView: {
    height: 40,
    backgroundColor: colors.white,
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1,
    flexDirection: "row",
  },
  buttons: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center", flexDirection: "row",
    borderRightWidth: 1,
    borderRightColor: colors.lightGrey, marginTop: 3
  },
  addToWishlistText: {
    color: colors.darkGrey,
    marginLeft: 5
  },
  removeText: { color: colors.darkGrey },
});
