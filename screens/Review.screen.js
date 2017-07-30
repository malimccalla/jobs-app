import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { MapView } from 'expo';
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

  renderLikedJobs() {
    return this.props.likedJobs.map((job) => {
      const {
        url, company, formattedRelativeTime, jobkey,
        longitude, latitude, title, jobtitle
      } = job;

      const initialRegion = {
        longitude,
        latitude,
        longitudeDelta: 0.045,
        latitudeDelta: 0.02,
      }

      return (
        <Card title={jobtitle} key={jobkey}>
          <View style={{ height: 200, borderRadius: 3 }}>
            <MapView
              scrollEnabled={false}
              initialRegion={initialRegion}
              style={{ flex: 1 }}
              provider={MapView.PROVIDER_GOOGLE}
              cacheEnabled
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{company}</Text>
              <Text style={styles.italics}>{formattedRelativeTime}</Text>
            </View>
            <Button
              title="Apply Now"
              backgroundColor="#03A9F4"
              onPress={() => Linking.openURL(url)}
            />
          </View>
        </Card>
      )
    })
  }

  render() {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'space-around',
  },
  italics: {
    fontStyle: 'italic'
  }
}

const mapStateToProps = ({ likedJobs }) => {
  return { likedJobs };
};

export default connect(mapStateToProps)(ReviewScreen);
