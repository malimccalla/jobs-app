import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swipe from '../components/Swipe';
import { connect } from 'react-redux';

class DeckScreen extends Component {
  render() {
    return (
      <View>
        <Swipe
          data={this.props.jobs}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ jobs }) => {
  return { jobs: jobs.results };
};

export default connect(mapStateToProps)(DeckScreen);
