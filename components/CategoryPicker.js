import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ListView,
} from 'react-native';

import CategoryMenuItem from "./CategoryMenuItem";

const categories = ["Babysitting", "Dog-Walking", 
                   "Event Helper", "Gardening", 
                   "Homework", "It support", 
                   "Misc", "Painting", 
                   "Sports or Music"];

export default class CategoryPicker extends React.Component {
  constructor() {
    super();
     this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows(categories),
      activeCategory: ""
    };
  }

  selectCategory = (categoryName) => {
    // updating the dataSource will force React to re-render the list
    this.setState({dataSource: this.ds.cloneWithRows(categories), activeCategory: categoryName});
  }

  renderCategory(rowData) {
    return <CategoryMenuItem categoryName={rowData} 
                             onPress={(categoryName) => this.selectCategory(categoryName)}
                             activeCategory={this.state.activeCategory}/>;
  }
   render() {
    return (
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this.renderCategory.bind(this)}
        />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});
