import React from 'react';
import { 
  StyleSheet, 
  View,
  Text
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import CategoryScreen from "./components/CategoryScreen";


const ScreenNavigator = StackNavigator({
  Home: {screen: CategoryScreen}
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScreenNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24
  },
});

