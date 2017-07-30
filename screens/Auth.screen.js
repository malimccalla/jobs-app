import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
  }

  render() {
    return (
      <View>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
      </View>
    );
  }
}

export default connect(null, actions)(AuthScreen);
