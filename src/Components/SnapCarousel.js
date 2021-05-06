import * as React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';

const {width, height} = Dimensions.get('screen');

export default class SnapCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          image: imagePath.slider1,
        },

        {
          image: imagePath.slider3,
        },
        {
          image: imagePath.slider5,
        },
      ],
    };
  }

  get pagination() {
    const {carouselItems, activeIndex} = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        //   containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 5,
          backgroundColor: 'black',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  _renderItem({item, index}) {
    return (
      <View style={styles.carouselImageView}>
        <Image style={styles.carouselImage} source={item.image} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.carouselContainer}>
        <View>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={width}
            itemWidth={400}
            renderItem={this._renderItem}
            loop={true}
            loopClonesPerSide={3}
            autoplay={true}
            autoplayDelay={2000}
            autoplayInterval={2000}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
          <View>{this.pagination}</View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  carouselImageView: {
    borderRadius: 5,
    height: 400,
    width: '100%'
  },
  carouselImage: {resizeMode: 'contain', height: 400, width: '100%',backgroundColor:colors.themeColor, marginLeft:-20},
  carouselContainer: {flex: 1, flexDirection: 'row', justifyContent: 'center'},
});
