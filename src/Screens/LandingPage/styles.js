import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
export default StyleSheet.create({
  container: { 
    flex: 1 
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    marginTop: -17
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 500,
    marginHorizontal: 25
  },
  renderImageView: {
    borderRadius: 5,
    height: 400,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    marginTop: 30
  },
  renderImage: {
    resizeMode: "contain",
    height: 500, 
    width: 300
  },
  renderTextView: {
    padding: 15,
    width: 290,
    justifyContent: "center",
  },
  renderText: {
    color: colors.white,
    fontSize: 25,
    textAlign: "center"
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: colors.white,
  },
})