import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { connect } from 'react-redux';
import { INFINITE_LIST } from '../../config/urls';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import { apiPost } from '../../utils/utils';
import imagePath from '../../constants/imagePath';
import commonStyles from '../../styles/commonStyles';
import styles from './styles';
const Limit = 5;
class Doctors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      noMoreData: false,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.apiCall();
  }

  apiCall(onEndReachedCall = false) {
    const { data } = this.state;
    this.setState({ isLoading: true });
    let Skip = onEndReachedCall ? data.length : 0;
    apiPost(INFINITE_LIST, {
      searchType: 'LEADERBOARD',
      limit: Limit,
      skip: Skip,
    })
      .then(res => {
        if (res.data.length == 0) {
          this.setState({ noMoreData: true, isLoading: false });
        } else {
          if (onEndReachedCall) {
            this.setState(
              {
                data: [...data, ...res.data],
                isLoading: false,
                refreshing: false,
              },
              () => {
              },
            );
          } else {
            this.setState(
              {
                data: [...res.data],
                isLoading: false,
                refreshing: false,
                noMoreData: false,
              },
              () => { },
            );
          }
        }
      })
      .catch(err => {
        this.setState({ isLoading: true });

        console.log(err);
      });
  }

  renderItem = data => {
    const { themeColor, themeColor2 } = this.props;
    return (
      <View style={styles.cardView}>
        <TouchableOpacity>
          <View style={styles.imageView}>
            <Image
              style={styles.cardImage}
              source={{ uri: data.item.profileImg[0].original }}
            />
            <View
              style={styles.cardTextView}>
              <View>
                <View style={styles.cardTextView1}>
                  <Text style={styles.fullNameInCard}>

                    {data.item.fullName}
                  </Text>
                  <TouchableOpacity style={{
                    marginRight: -70
                  }}>
                    <Text
                      style={{
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        borderRadius: 2,
                        backgroundColor: themeColor2,
                        color: colors.white,
                      }}>
                      Book
                      </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.cardMailView}>
                  <Text numberOfLines={1} style={{ color: themeColor }}>
                    {data.item.email}
                  </Text>
                </View>
                <View style={styles.cardBioView}>
                  <Text numberOfLines={1} style={styles.bioInCard}>
                    {data.item.bio}
                  </Text>
                </View>

                <View
                  style={styles.iconView}>
                  <TouchableOpacity>
                    <Image
                      style={styles.cardSentImage}
                      source={imagePath.sentImage}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image
                      style={styles.cardHeartImage}
                      source={imagePath.heartImage}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  endReached = () => {
    const { isLoading, noMoreData } = this.state;
    if (isLoading || noMoreData) {
      return;
    }

    this.setState({ isLoading: true });
    this.apiCall(true);
  };

  footerItems = () => {
    const { isLoading } = this.state;
    return (
      <View style={styles.footer}>
        {isLoading ? (
          <ActivityIndicator
            size={'large'}
            color={colors.red}
            style={{ margin: 15 }}
          />
        ) : null}
      </View>
    );
  };

  _onRefresh = () => {
    this.setState({ refreshing: true, noMoreData: false });
    this.apiCall();
  };

  render() {
    const { themeColor } = this.props;
    const { data, refreshing } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.categoriesTextView}>
            <TouchableOpacity>
              <Text style={{ ...commonStyles.mediumFont20, color: themeColor }}>
                {strings.DOCTORS}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={item => this.renderItem(item)}
          onEndReached={this.endReached}
          ListFooterComponent={this.footerItems}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this._onRefresh}
            />
          }
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    themeColor: state.themeReducer.themeColor,
    themeColor2: state.themeReducer.themeColor2,
  };
};

export default connect(mapStateToProps)(Doctors);
