import React from 'react';
import { 
  StyleSheet, 
  View,
  Text
} from 'react-native';

import CategoryMenuItem from "./CategoryMenuItem";
import CategoryPicker from "./CategoryPicker";
import Header from "./Header";
import ProgressBar from "./ProgrssBar";
import NextButton from "./NextButton";

export default class CategoryScreen extends React.Component {
  static navigationOptions = {
      title: <Header />
  }
  constructor() {
    super();
    this.state = {
      activeCategory: "",
      progressLevel: 2
    }
  }

  updateCategory = (activeCategory) => {
    this.setState({activeCategory});
  }

  updateprogressLevel = (progressLevel) => this.setState({progressLevel});

  render() {
    return (
      <View style={styles.container}>
        <ProgressBar progressLevel={this.state.progressLevel}/>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Vad fick du hjälp med?</Text>
        </View>
        <CategoryPicker activeCategory={this.state.activeCategory}
                        updateCategory={this.updateCategory}/>
        <NextButton nextPage={() => console.log("user chose " + this.state.activeCategory)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f6f4',
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
