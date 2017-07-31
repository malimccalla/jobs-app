import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map');
    }
  }

  render() {
    return <View style={{ flex: 1, backgroundColor: '#0089ee' }} />;
  }
}

const mapStateToProps = ({ auth }) => {
  return { token: auth.token };
};

export default connect(mapStateToProps, actions)(AuthScreen);
