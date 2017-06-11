import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import SVGImage from "react-native-svg-image";

import SvgUri from 'react-native-svg-uri';

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