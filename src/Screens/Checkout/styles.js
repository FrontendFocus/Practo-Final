import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: { flex: 1 },
  cardView: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    margin: 8,
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  headerView: {
    flexDirection: 'row',
    position: 'relative',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    alignItems: 'center',
    height: 40,
    paddingTop: 5,
  },
  categoriesTextView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  subCardview: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  subCardview1: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  imageView: { padding: 5, flexDirection: 'row' },
  cardImage: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  searchIcon:{
    height: 20,
    width: 20,
    // marginRight: 10,
    position: "absolute",
    left: 145,
  },
  cardTextView: { flexDirection: 'row', paddingTop: 6, marginLeft: 5 },
  fullNameInCard: { fontWeight: 'bold', fontSize: 17 },
  fullNameInCard1: { fontSize: 15},
  itemsText: { fontWeight: 'bold', fontSize: 17, marginLeft:8 },
  cardMailView: { marginTop: 5, width: 280 },
  cardBioView: { marginTop: 8, width: 180 },
  bioInCard: { color: colors.darkGrey },
  iconView: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardSentImage: { height: 30, width: 30 },
  cardHeartImage: { height: 33, width: 33, marginHorizontal: 10 },

})