import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import StatusBar, { } from '../../Components/StatusBar'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import navigationStrings from '../../constants/navigationStrings';
import strings from '../../constants/lang';
import { connect } from 'react-redux';
import commonStyles from '../../styles/commonStyles';
import styles from './styles';
const { width, height } = Dimensions.get("screen")
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [

        {
          image: imagePath.peanut,
        },
        {
          image: imagePath.carousal,
        },
        {
          image: imagePath.nitro,
        },
        {

        },
      ]
    }
  }
  get pagination() {
    const { carouselItems, activeIndex } = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  _renderItem({ item }) {
    return (
      <View style={styles.renderImageView}>

        <Image style={styles.renderImage}
          source={item.image} />
        <View style={styles.renderTextView}>
          <Text style={styles.renderText}>
            {item.text}
          </Text>
        </View>
      </View>
    )
  }
  render() {
    const { themeColor, themeColor2 } = this.props
    const { activeIndex } = this.state
    if (activeIndex != 3) {
      return (
        <View style={{
          flex: 1,
          backgroundColor: themeColor,
        }}>
          <StatusBar />
          <View>
            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={this.state.carouselItems}
              sliderWidth={width}
              itemWidth={400}
              renderItem={this._renderItem}
              onSnapToItem={index => this.setState({ activeIndex: index })} />
            <View>
              {this.pagination}
            </View>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate(navigationStrings.MOBILEOTP)}>
            <View >
              <Text style={{
                color: themeColor,
                backgroundColor: colors.white,
                alignSelf: "center",
                paddingHorizontal: 110,
                paddingVertical: 13,
                borderRadius: 10,
                fontFamily: fontFamily.bold,
                fontSize: 17,
              }}>
                {strings.GET_STARTED}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
          <StatusBar />
          <ImageBackground
            source={imagePath.logo}
            style={styles.image}>
            <View
              style={styles.buttonView}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(navigationStrings.SIGNUP)}>
                <View>
                  <Text style={{
                    color:colors.themeColor,
                    backgroundColor: colors.white,
                    alignSelf: "center",
                    paddingHorizontal: 50,
                    paddingVertical: 13,
                    borderRadius: 10,
                    ...commonStyles.mediumFont16
                  }}>
                    {strings.SIGN_UP}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(navigationStrings.MOBILEOTP)}>
                <View >
                  <Text style={{
                    color:colors.themeColor,
                    backgroundColor: colors.white,
                    alignSelf: "center",
                    paddingHorizontal: 50,
                    paddingVertical: 13,
                    borderRadius: 10,
                    ...commonStyles.mediumFont16,
                  }}>
                    {strings.LOGIN}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

          </ImageBackground>
        </View>
      )
    }
  }
}
const mapStateToProps = state => {
  return (
    {
      themeColor: state.themeReducer.themeColor,
      themeColor2: state.themeReducer.themeColor2

    }
  )
}
export default connect(mapStateToProps)(LandingPage);