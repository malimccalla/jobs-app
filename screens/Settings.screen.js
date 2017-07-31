import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Button, Icon } from 'react-native-elements';
import { clearLikedJobs } from '../actions';

class SettingsScreen extends Component {
  static navigationOptions = () => ({
    title: 'Review Jobs',
    headerStyle: {
      marginTop: Platform.OS === 'andriod' ? 24 : 0
    },
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="favorite" size={24} color={tintColor} />;
    }
  });

  render() {
    return (
      <View>
        <Button
          title="Reset Liked Jobs"
          icon={{ name: 'delete-forever' }}
          large
          backgroundColor="#f44336"
          onPress={this.props.clearLikedJobs}
        />
      </View>
    );
  }
}

export default connect(null, { clearLikedJobs })(SettingsScreen);
