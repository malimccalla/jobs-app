import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { slideIndex: 0, text: 'Welcome to Shuttle' },
  { slideIndex: 1, text: 'Set your location, then swipe away!' },
  { slideIndex: 2, text: 'Swipe mcSwipe face' },
];

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <Slides
        data={SLIDE_DATA}
        onComplete={this.onSlidesComplete}
      />
    );
  }
}

export default WelcomeScreen;
