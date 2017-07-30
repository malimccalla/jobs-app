import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerStyle: {
      marginTop: Platform.OS === 'andriod' ? 24 : 0
    },
    headerRight: (
      <Button
        onPress={() => navigation.navigate('settings')}
        title="Settings"
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0, 122, 255, 1)"
      />
    )
  })

  render() {
    return (
      <View>
        
      </View>
    );
  }
}

const mapStateToProps = ({ likedJobs }) => {
  return { likedJobs };
};

export default connect(mapStateToProps)(ReviewScreen);
