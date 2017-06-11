import React from 'react';
import { 
  StyleSheet, 
  View,
} from 'react-native';

import CategoryMenuItem from "./components/CategoryMenuItem";
import CategoryPicker from "./components/CategoryPicker";
import Header from "./components/Header";
import ProgressBar from "./components/ProgrssBar"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ProgressBar progressLevel={2}/>
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
