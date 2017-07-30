import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import Swipe from '../components/Swipe';
import { MapView } from 'expo';
import * as actions from '../actions';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';

class DeckScreen extends Component {
  renderCard(job) {
    const initialRegion ={
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02,
    };

    return (
      <Card title={job.jobtitle}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            initialRegion={initialRegion}
            style={{ flex: 1 }}
            provider={MapView.PROVIDER_GOOGLE}
            cacheEnabled={Platform.OS === 'andriod'}
            >
            </MapView>
          </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>{job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}</Text>
      </Card>
    )
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No More Jobs">
        <Button
          title="Back to map"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#00a9f4"
          onPress={() => this.props.navigation.navigate('map')}
        />
      </Card>
    )
  }

  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          keyProp="jobkey"
          onSwipeRight={job => this.props.likeJob(job)}
        />
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  }
}

const mapStateToProps = ({ jobs }) => {
  return { jobs: jobs.results };
};

export default connect(mapStateToProps, actions)(DeckScreen);
