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
    };
  }

  render() {
    return (
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <CategoryMenuItem categoryText={rowData}/>}
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
