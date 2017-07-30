import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';

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
    }, {
      lazy: true,
      navigationOptions: {
        tabBarVisible: false
      }
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
