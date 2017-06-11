import React from 'react';
import { 
  StyleSheet, 
  View,
  Text
} from 'react-native';

import CategoryMenuItem from "./components/CategoryMenuItem";
import CategoryPicker from "./components/CategoryPicker";
import Header from "./components/Header";
import ProgressBar from "./components/ProgrssBar";
import NextButton from "./components/NextButton";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ProgressBar progressLevel={2}/>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Vad fick du hjälp med?</Text>
        </View>
        <CategoryPicker />
        <NextButton nextPage={() => console.log("open next page")}/>
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
  titleTextContainer: {
    alignItems: "center",
    padding: 15
  },
  titleText: {
    color: "#555656",
    fontSize: 20,
    fontWeight: "bold"
  }
});
