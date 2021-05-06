import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: { flex: 1 },
  cardView: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    margin:8,
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },

  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
  imageView: { padding: 5, flexDirection: 'row' },
  cardImage: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    borderRadius: 105,
    marginTop:20
  },
  cardTextView: { flexDirection: 'row'},
  cardTextView1: { flexDirection: 'row',justifyContent:'space-between' },
  fullNameInCard: { fontWeight: 'bold', fontSize: 17 },
  cardMailView: { marginTop: 5, width: 180 },
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