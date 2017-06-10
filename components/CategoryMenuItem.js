import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CategoryMenuItem = ({categoryText}) => {
    return(
        <View style={styles.item}>
            <Text >{categoryText}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
  item: {
        backgroundColor: '#CCC',
        margin: 10,
        width: 100,
        height: 100
    }
});

export default CategoryMenuItem;