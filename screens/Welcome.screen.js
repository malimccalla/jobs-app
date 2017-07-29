import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { slideIndex: 0, text: 'Welcome to job app' },
  { slideIndex: 1, text: 'Set your location, then swipe away!' },
  { slideIndex: 2, text: 'Swipe mcSwipe face' },
  { slideIndex: 3, text: 'Another page to show' },
  { slideIndex: 4, text: 'Oh and look another aswell too long though' },
];

class WelcomeScreen extends Component {
  render() {
    return (
      <Slides data={SLIDE_DATA}/>
    );
  }
}

export default WelcomeScreen;
