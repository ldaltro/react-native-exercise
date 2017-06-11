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
                   "Music Lessons"];

export default class CategoryPicker extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(categories),
      activeCategory: ""
    };
  }

  selectCategory = (categoryName) => {
    this.setState({activeCategory: categoryName});
  }

  renderCategory(rowData) {
    return <CategoryMenuItem categoryText={rowData} 
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
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});
