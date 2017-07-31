import React from 'react';
import { Notifications, Permissions } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import registerForNotifications from './services/push_notifications';
import askForContacts from './services/contacts';

import AuthScreen from './screens/Auth.screen';
import WelcomeScreen from './screens/Welcome.screen';
import MapScreen from './screens/Map.screen';
import DeckScreen from './screens/Deck.screen';
import ReviewScreen from './screens/Review.screen';
import SettingsScreen from './screens/Settings.screen.js';

export default class App extends React.Component {
  componentDidMount() {
    registerForNotifications();
    askForContacts();

    Notifications.addListener(notification => {
      const { data: { text }, origin } = notification;
      // const text = notification.data.text
      if (origin === 'received' && text) {
        Alert.alert('New Push from mali', text, [{ text: 'OK' }]);
      }
    });
  }

  render() {
    const MainNavigator = TabNavigator(
      {
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen },
        main: {
          screen: TabNavigator(
            {
              map: { screen: MapScreen },
              deck: { screen: DeckScreen },
              review: {
                screen: StackNavigator({
                  review: { screen: ReviewScreen },
                  settings: { screen: SettingsScreen }
                })
              }
            },
            {
              tabBarPosition: 'bottom',
              swipeEnabled: true,
              tabBarOptions: {
                labelStyle: { fontSize: 12 }
              }
            }
          )
        }
      },
      {
        lazy: true,
        navigationOptions: {
          tabBarVisible: false
        }
      }
    );

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
    backgroundColor: '#fff'
  }
});
