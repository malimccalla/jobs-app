import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import _ from 'lodash';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { slideIndex: 0, text: 'Welcome to Shuttle' },
  { slideIndex: 1, text: 'Set your location, then swipe away!' },
  { slideIndex: 2, text: 'Swipe mcSwipe face' },
];

class WelcomeScreen extends Component {
  state = { token: null };

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('map');
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />
    }

    return (
      <Slides
        data={SLIDE_DATA}
        onComplete={this.onSlidesComplete}
      />
    );
  }
}

export default WelcomeScreen;
