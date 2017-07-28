import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

import AuthScreen from './screens/Auth.screen';
import WelcomeScreen from './screens/Welcome.screen';
import MapScreen from './screens/Map.screen';
import DeckScreen from './screens/Deck.screen';
import ReviewScreen from './screens/Review.screen';
import SettingsScreen from './screens/Settings.screen.js';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen }
            })
          }
        })
      }
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
