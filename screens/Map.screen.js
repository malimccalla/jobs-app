import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView, Permissions, Location } from 'expo';
import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MapScreen extends Component {
  static navigationOptions = () => ({
    title: 'Map',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="my-location" size={24} color={tintColor} />;
    }
  });

  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  };

  async componentWillMount() {
    let response = await Permissions.askAsync(Permissions.LOCATION);
  }

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = region => {
    this.setState({ region });
  };

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('deck');
    });
  };

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
          provider={MapView.PROVIDER_GOOGLE}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Search"
            large
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            raised
            icon={{ name: 'search' }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0
  },
  buttonStyle: {
    backgroundColor: '#0089ee',
    borderRadius: 5
  },
  buttonTextStyle: {
    color: '#fff',
    fontFamily: 'Avenir Next',
    fontWeight: '600',
    fontSize: 18
  }
};

export default connect(null, actions)(MapScreen);
