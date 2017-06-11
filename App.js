import React from 'react';
import { 
  StyleSheet, 
  View,
} from 'react-native';

import CategoryMenuItem from "./components/CategoryMenuItem";
import CategoryPicker from "./components/CategoryPicker";
import Header from "./components/Header";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <CategoryPicker />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24
  },
});
